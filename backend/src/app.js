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

  errorHandler () {
    this.express.use(errorHandler)
  }
}

export default new App().express
