import express from 'express';
import cors from 'cors';
import routes from './routes';
// import errorHandler from './errorHandler';

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

  errorHandler () {
    this.express.use(function (err, req, res, next) {
      console.log('eita nois')
      console.log(err.stack)
      res.status(500).send({ Error: err.stack })
    })
  }
}

export default new App().express
