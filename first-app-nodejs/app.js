const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello Manish');
        res.end();
    }

    if (req.url === '/api/courses'){
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }

});

// server.on('connection', (socket) => {
//     console.log('New connection...');
// });

server.listen(3000);

console.log('Listening on port 3000...');




// const EventEmitter = require("events");
// //const emitter = new EventEmitter();


// const Logger = require('./logger');
// const logger = new Logger();

// //Register a listener
// logger.on("messageLogged", (arg) => {
//     console.log("Listener called", arg);
// });

// logger.log('Manish');



// const fs = require('fs');

// fs.readdir('./', function(err, files){
//     if (err) console.log('Error', err);
//     else console.log('Result', files);
// });

// const files = fs.readdirSync('./');
// console.log(files);

// const os = require('os');

// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();

// console.log(`Total Memory: ${totalMemory}`);
// console.log(`Free Memory: ${freeMemory}`);

// const path = require('path');

// var pathObj = path.parse(__filename);

// console.log(pathObj);

// var log = require('./logger');

// log('message');

//console.log(log);

//console.log(module);

// function sayHello(name) {
//     console.log('Hello'+ name);
// }

// sayHello('Manish');
