
import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import router from './routes/router';
import models from './db/models';

const server = express();

// middleware
server.use(logger('dev'));
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use(router);

models.sequelize.sync().then(() => {
  server.listen(3000, () => {
    console.log('API listening on port 3000!');
  });
});
