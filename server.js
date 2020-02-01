import express from 'express';
import config from './config';
import path from 'path';
import api from './routes/api';
import serverRender from './serverRender';
const server = express();

server.set('view engine', 'hbs');
server.set('views', path.join(__dirname, 'views'));

server.get('/', (req, res) => {
  serverRender()
    .then( ({ initialMarkup, initialData }) => {
    res.render('site/index', {
      initialMarkup,
      initialData
    });
  })
  .catch(console.error)
});

server.use('/api', api() ) ;

server.use(express.static('public'));

server.listen(config.port, config.host, () => {
  console.log(`listening on port ${ config.port }`);
});