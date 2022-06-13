const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-exercises');

const createSchema = new mongoose.Schema({
    name: String,
    author: String,
    isPublished: Boolean,
    date: Date,
    price: Number,
    tags: [ String ]
});


const Course = mongoose.model('Course', createSchema);

async function getCourse() {
    return await Course
    .find({ isPublished: true })
    .or([ {tags: 'frontend'}, {tags: 'backend'} ])
    .sort({ price: -1 })
    .select({ name: 1, author: 1 })
}

async function run() {
    const courses = await getCourse();
    console.log(courses);
}

run();



