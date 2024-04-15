import jsonServer from 'json-server';
import { readFileSync } from 'fs';
import path from 'path';
const server = jsonServer.create();
const router = jsonServer.router('db.json');
// jsonServer.rewriter({ '/api/*': '/$1' })(server);
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
  if (!req.headers.authentication && !req.path.includes('login')) {
    return res.status(401).jsonp({ error: 'Unauthorized', message: 'You are not authorized to access this resource' });
  }

  // res.header('Allow', 'GET, POST, PUT, PATCH');

  next();
});

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);

server.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  const db = JSON.parse(readFileSync(path.resolve(import.meta.dirname, 'db.json'), 'utf8'));
  const { users = [] } = db;
  const userFromDB = users.find(user => user.username === username && user.password === password);

  if (userFromDB) {
    userFromDB.token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik5vdCBHb29kIEZvciBZb3UiLCJpYXQiOjE1MTYyMzkwMjJ9.PuT8C27aM6eEWFws3c4Negisv_wWtmlT4Eg9Gn-IpnY';
    delete userFromDB.password;
    return res.status(200).jsonp(userFromDB);
  }

  return res.status(403).jsonp({ error: 'Unauthorized', message: 'User was not found' });
});

server.get('/api/profile', (req, res) => {
  const db = JSON.parse(readFileSync(path.resolve(import.meta.dirname, 'db.json'), 'utf8'));
  const { profile = undefined } = db;

  if (profile) {
    return res.status(200).jsonp(profile);
  }

  return res.status(204).jsonp({ error: 'No Content', message: 'Profile was not found' });
});

// Use default router
// server.use(jsonServer.rewriter({
//   '/api/*': '/$1',
// }));
server.use('/api', router);
server.listen(1111, () => {
  console.log('JSON Server is running on port 1111');
});
