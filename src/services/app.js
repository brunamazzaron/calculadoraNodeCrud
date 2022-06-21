import express from "express";

import routes from './routes';

class App{
    construtor(){
        this.server = express();
        this.middleware();
        this.routes();
    }
};

middleware(){
    this.server.use(express.json());
};

routes(){
    this.server.user(routes)
}

export default new App().server;
