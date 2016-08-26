
import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import router from './routes/router';
import models from './db/models';

const server = express();

server.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// middleware
server.use(logger('dev'));
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use(router);

models.sequelize.sync().then(() => {
  server.listen(4000, () => {
    console.log('API listening on port 4000!');
  });
});
