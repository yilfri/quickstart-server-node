require('dotenv').config();
const Server = require('./models/server');

// Server class created
const server = new Server();

// Listening server
server.listen();
