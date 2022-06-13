const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-exercises');

const createSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        // matach: /pattern/
    },
    catrgory: {
        type: String,
        required: true,
        enum: ['web', 'mobile', 'network']
    },

    author: String,
    isPublished: Boolean,
    date: { type: Date, default: Date.now},
    tags: [ String ],
    price: {
        type: Number,
        required: function() { return this.isPublished; }
    }
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


//Query first approach to update any document

async function updateCourse(id) {
    const course = await Course.findById(id);
    if (!course) return;

    course.isPublished = true;
    course.author = 'Another Author';
    
    //can use any approach upper or lower

//     course.set({
//         isPublished: true,
//         author: 'Another Author'
//     });

    const result = await course.save();
    console.log(result);
}

updateCourse('5a68fdc3615eda645bc6bdec');


// second approach

// async function updateCourse(id) {
//     const course = await Course.findByIdAndUpdate(id, {
//         $set: {
//             author: 'Jason',
//             isPublished: false
//         }

//     }, { new: true } );
//     console.log(course);
// }
// updateCourse('5a68fdc3615eda645bc6bdec');

// Removing documents

// async function removeCourse(id) {
//     const result = await Course.deleteMany({ _id: id });
//     const course = await Course.findByIdAndRemove(id);
//     console.log(result);
// }

// removeCourse('5a68fdc3615eda645bc6bdec');