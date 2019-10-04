const express = require("express")
const server = express();

server.use(logger);
server.use(express.json());

const projectRouter = require("./projectRouter");
const actionRouter = require("./actionRouter");

server.use("/projectRouter", logger, projectRouter)
server.use("/actionRouter", logger, actionRouter)

server.get('/', (req, res) => {
    res.status(200).json({ welcome: 'It is Working!' });
  });

module.exports = server;