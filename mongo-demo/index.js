const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [ String ],
    date: { type: Date, default: Date.now },
    isPublished: Boolean
});

const Course = mongoose.model('Course', courseSchema);

async function createCourse() {
    const course = new Course({
        name: 'React.js Course',
        author: 'Manish',
        tags: ['React', 'frontend'],
        isPublished: true
    });
    
    const result = await course.save();
    console.log(result);
}


async function getCourses() {
    const courses = Course
        .find({ author: 'Manish', isPublished: true });
    console.log(courses);
}

getCourses();



