const express = require('express'); 
const app = express();

const courses = [
    {id: 1, name: 'course1'},
    {id: 1, name: 'course2'},
    {id: 1, name: 'course3'},
];


app.get('/', (req, res) => {
    res.send('Hello Manish Mahato');
});
// app.post()
// app.put()
// app.delete()
app.get('/api/courses', (req, res) => {
    res.send([1,2,3]);
});

app.get('/api/courses/:id', (req, res) => {
    res.send(req.params.id);
});


app.get('/api/posts/:year/:month', (req, res) => {
    res.send(req.query)
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

