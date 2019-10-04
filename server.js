const express = require("express")

const server = express();

const projectRouter = require("./projectRouter");
const actionRouter = require("./actionRouter");

server.use(express.json());

function logger(req, res, next) {
    console.log(
      `${req.method} to ${req.url}`
    );
    next();
  }
  
  server.use(logger);

server.use("/api/projects", projectRouter)
server.use("/api/actions", actionRouter)

server.get('/', (req, res) => {
    res.status(200).json({ welcome: 'It is Working!' });
  });

//server.get('/test', (req, res) => {
  //  res.status()
   // console.log()
//})

// logger



module.exports = server;