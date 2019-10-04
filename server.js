const express = require("express")
const server = express();

//server.use(logger);
server.use(express.json());

const projectRouter = require("./projectRouter");
const actionRouter = require("./actionRouter");

server.use("/projectRouter", logger, projectRouter)
//server.use("/actionRouter", actionRouter)

server.get('/', (req, res) => {
    res.status(200).json({ welcome: 'It is Working!' });
  });

// logger

function logger(req, res, next) {
    console.log(
      `${req.method} to ${req.url}`
    );
    next();
  }
  
  server.use(logger);

module.exports = server;