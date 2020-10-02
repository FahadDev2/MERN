const app = require('..');
const PORT = process.env.PORT || '3500';

const server = app.listen(PORT);

module.exports = server;