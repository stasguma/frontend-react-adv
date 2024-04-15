import db from './db.json';

const admin = db.users.find(u => u.username === 'admin');

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
            data: admin,
          },
        ],
        interceptors: {
          response: (data, {request, setStatusCode}) => {
            const { username, password } = request.body;
            const { users = [] } = db;
            const userFromDB = users.find(user => user.username === username && user.password === password);

            if(!userFromDB) {
              setStatusCode(403);
              return { error: 'Unauthorized', message: 'User was not found' };
            }

            return data;
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
    response: (data, {getHeader, request, response, setStatusCode}) => {
      console.log(data)
      console.log(request.originalUrl)
      if (!getHeader('authentication') && !request.originalUrl.includes('login')) {
        setStatusCode(401);
        return { error: 'Unauthorized', message: 'You are not authorized to access this resource' };
      }

      return data;
    }
  }
};

export default mockServerConfig;