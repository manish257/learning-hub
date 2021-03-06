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
    const pageNumber = 2;
    const pageSize = 10;
    const courses = await Course
        //.find({ author: 'Manish', isPublished: true })
        //.find({ price: { $gte: 10, $lte: 20 } })
        .find({ price: { $in: [10, 15, 20] } })
        // .or([ { author: 'Manish' }, { isPublished: true } ]) - use this with .find()
        
        
        // starts with Manish
        // .find({ author: /^Manish/ })


        // ends with Mahato
        // .find({ author: /Mahato$/ })

        //contains Manish anywhere
        // .find({ author: /.*Manish.*/ })
        .skip((pageNumber - 1) * pageSize)
        .limit(pageSize)
        .sort({ name: 1 })
        .select({ name: 1, tags: 1 });
    console.log(courses);
}

getCourses();



