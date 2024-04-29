import db from './db.json';

/** @type {import('mock-config-server').MockServerConfig} */
const mockServerConfig = {
  port: 31299,
  rest: {
    baseUrl: '/api',
    configs: [
      {
        path: '/login',
        method: 'post',
        routes: [
          {
            data: db.users,
          },
        ],
        interceptors: {
          response: (data, {request, setStatusCode}) => {
            const { username, password } = request.body;
            const { users = [] } = db;
            const userFromDB = users.find(user => user.username === username && user.password === password);

            if(!userFromDB) {
              setStatusCode(404);
              return { error: 'Not Found', message: 'User was not found' };
            }

            return userFromDB;
          }
        }
      },
      {
        path: '/profile/my',
        method: 'get',
        routes: [
          {
            data: db.users,
          },
        ],
        interceptors: {
          response: (data, {request, setStatusCode}) => {
            // const { id } = request.params;
            const extractedToken = request.header('Authorization').replace('Bearer ', '');
            console.log('extractedToken', extractedToken)
            const { users = [] } = db;
            const userFromDB = users.find(user => user.token === extractedToken);

            if(!userFromDB) {
              setStatusCode(404);
              return { error: 'Not Found', message: 'User was not found' };
            }

            return userFromDB;
          }
        }
      },
      {
        path: '/profile/:id',
        method: 'get',
        routes: [
          {
            data: db.users,
          },
        ],
        interceptors: {
          response: (data, {request, setStatusCode}) => {
            const { id } = request.params;
            const { users = [] } = db;
            const userFromDB = users.find(user => user.id === Number.parseInt(id));

            if(!userFromDB) {
              setStatusCode(404);
              return { error: 'Not Found', message: 'User was not found' };
            }

            return userFromDB;
          }
        }
      },
      {
        path: '/profile/:id',
        method: 'patch',
        routes: [
          {
            data: db.users,
          },
        ],
        interceptors: {
          response: (data, {request, setStatusCode}) => {
            const reqData = request.body;
            const { id } = request.params;
            const { users = [] } = db;
            const userFromDB = users.find(user => user.id === Number.parseInt(id));

            if(!userFromDB) {
              setStatusCode(404);
              return { error: 'Not Found', message: 'User was not found' };
            }

            return Object.assign(userFromDB, reqData);
          }
        }
      }
    ]
  },
  database: {
    data: db,
    routes: {
      '/api/*': '/$1',
    },
  },
  interceptors: {
    request: (params) => {
      console.log('request')
    },
    response: (data, {getHeader, getHeaders, request, setStatusCode}) => {
      console.log(data)
      console.log('originalUrl: ', request.originalUrl)
      if (!request.header('Authorization') && !request.originalUrl.includes('login')) {
        setStatusCode(401);
        return { error: 'Unauthorized', message: 'You are not authorized to access this resource' };
      }

      return data;
    }
  }
};

export default mockServerConfig;