const express = require('express');
const router = express.Router();


const courses = [
  { id: 1, name: "course1" },
  { id: 1, name: "course2" },
  { id: 1, name: "course3" },
];
router.get("/api/courses", (req, res) => {
    res.send([1, 2, 3]);
  });
  
  router.get("/api/courses/:id", (req, res) => {
    const course = courses.find((c) => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send("The course with given ID was not found");
    res.send(course);
  });
  
  router.get("/api/posts/:year/:month", (req, res) => {
    res.send(req.query);
  });
  

router.post('/api/courses', (req, res) => {

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


router.put('/api/courses/:id', (req, res) => {
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

router.delete('/api/courses/:id', (req, res) => {
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

module.exports = router;