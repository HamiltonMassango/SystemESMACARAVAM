import express from 'express';
import { urlencoded } from 'body-parser';
import { join } from 'path';
import router from './routes';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }
  middlewares() {
    this.server.set('view engine', 'ejs');
    this.server.set('views', 'views');
    this.server.use(urlencoded({ extended: false }));
    this.server.use(express.static(join(__dirname, 'public')));
  }
  routes() {
    this.server.use(router);
  }
}

export default new App().server;
