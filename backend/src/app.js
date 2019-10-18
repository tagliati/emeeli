import express from 'express';
import cors from 'cors';
import routes from './routes';
import errorHandler from './errorHandler';

class App {
  constructor () {
    this.express = express()

    this.middlewares()
    this.routes()
    this.errorHandler()
  }

  middlewares () {
    this.express.use(cors())
  }

  routes () {
    this.express.use(routes)
  }

  addAuthor () {
    this.express.use(function (req, res, next) {
      var send = res.send
      res.send = function (body) {
        // It might be a little tricky here, because send supports a variety of arguments, and you have to make sure you support all of them!
        // Do something with the body...
        send.call(this, body)
      };
    })
  }

  errorHandler () {
    this.express.use(errorHandler)
  }
}

export default new App().express
