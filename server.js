const express = require('express');

const ProjRouter = require('./projects/proj-routes.js');

const server = express();

server.use(express.json());
server.use('/api/proj', ProjRouter);

module.exports = server;