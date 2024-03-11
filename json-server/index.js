import jsonServer from 'json-server';
import { readFileSync } from 'fs';
import path from 'path';
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// Delay middleware
server.use(async (req, res, next) => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1500);
  });

  next();
});

// Check headers if user authorized
server.use((req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).jsonp({ error: 'Unauthorized', message: 'You are not authorized to access this resource' });
  }

  next();
});

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);

server.post('/login', (req, res) => {
  const { username, password } = req.body;
  const db = JSON.parse(readFileSync(path.resolve(import.meta.dirname, 'db.json'), 'utf8'));
  const { users } = db;
  const userFromDB = users.find(user => user.username === username && user.password === password);

  if (userFromDB) {
    return res.status(200).jsonp(userFromDB);
  }

  return res.status(403).jsonp({ error: 'Unauthorized', message: 'User was not found' });
});

// Use default router
server.use(router);
server.listen(6666, () => {
  console.log('JSON Server is running');
});
