const debug = require('debug')('app:startup'); 
// const dbDebugger = require('debug')('app:db');
//const config = require('config');
const morgan = require('morgan');
const helmet = require('helmet');
const Joi = require('joi');
const logger = require('./logger');
const express = require("express");
const app = express();

app.set('view engine', 'pug');

// console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
// console.log(`app: ${app.get('env')}`);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(helmet());

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

const courses = [
  { id: 1, name: "course1" },
  { id: 1, name: "course2" },
  { id: 1, name: "course3" },
];

app.get("/", (req, res) => {
  res.send("Hello Manish Mahato");
});
// app.post()
// app.put()
// app.delete()
app.get("/api/courses", (req, res) => {
  res.send([1, 2, 3]);
});

app.get("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) res.status(404).send("The course with given ID was not found");
  res.send(course);
});

app.get("/api/posts/:year/:month", (req, res) => {
  res.send(req.query);
});


app.post('/api/courses', (req, res) => {

    const { error } = validateCourse(req.body); //result error
    
    if (error) return res.status(400).send(result.error);

    // const schema = {
    //     name: Joi.string().min(3).required()
    // };

    // const result = Joi.validate(req.body, schema);

    // if (result.error){
    //     //400 Bad Request
    //     res.status(400).send(result.error);
    //     return;
    // }

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

app.put('/api/courses/:id', (req, res) => {
    //Look up the course
    //If not existing, return 404
    const course = courses.find((c) => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send("The course with given ID was not found");

    //const result = validateCourse(req.body);
    const { error } = validateCourse(req.body); //result error
    
    //400 Bad Request
    if (error) return res.status(400).send(result.error);


    //Update course
    course.name = req.body.name;
    //Return the updated course
    res.send(course);
});

function validateCourse(course) {
    //Validate
    //If invalid, return 400 - Bad request
    const schema = {
        name: Joi.string().min(3).required()
    };

    return Joi.validate(course, schema);
}


//delete

app.delete('/api/courses/:id', (req, res) => {
    // Look up the course
    // Not existing, return 404
    const course = courses.find((c) => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send("The course with given ID was not found");
    
    // Delete
    const index = courses.indexOf(course);
    courses.splice(index, 1);

    // Return the same course
    res.send(course);


});