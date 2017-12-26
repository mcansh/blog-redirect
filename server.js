const { createServer } = require('http');

const server = createServer((req, res) => {
  const { url } = req;
  const location = `https://mcansh.blog${url}`;

  res.writeHead(301, {
    location,
  });

  res.end();
}).listen(3000, (err) => {
  if (err) throw err;
  console.log('> Ready on http://localhost:3000'); // eslint-disable-line no-console
});

module.exports = server;
