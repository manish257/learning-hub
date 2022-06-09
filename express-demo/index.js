const debug = require('debug')('app:startup'); 
// const dbDebugger = require('debug')('app:db');
//const config = require('config');
const morgan = require('morgan');
const helmet = require('helmet');
const Joi = require('joi');
const logger = require('./logger');
const courses = require('./courses');
const express = require("express");
const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

// console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
// console.log(`app: ${app.get('env')}`);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(helmet());
app.use('/api/courses', courses);

//Configuration
// console.log('Application Name: ' + config.get('name'));
// console.log('Mail Server: ' + config.get('mail.host'));
// console.log('Mail Password: ' + config.get('mail.password'));


if (app.get('env') === 'development') {
  app.use(morgan('tiny'));
  debug('Morgan enabled...');
}

//DB work...
// dbDebugger('Connected to the Database...');

app.use(logger);

// app.use(function(req, res, next) {
//   console.log('Authenticating...');
//   next();
// });


app.get("/", (req, res) => {
  res.render('index', { title: 'My Express App', message: 'Manish Mahato' });
  // res.send("Hello Manish Mahato");
});
// app.post()
// app.put()
// app.delete()

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));