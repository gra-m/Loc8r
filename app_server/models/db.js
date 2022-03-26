//This file is itself required by app.js so runs on startup.
require('./locations')
const mongoose = require('mongoose');



//LOCAL CONNECTION Initial Mongo setUP
//const dbURI = 'mongodb://127.0.0.1:27017/Loc8r';

//INITIAL REMOTE CONNECTION:
const dbURI = 'mongodb+srv://loc8remUser:13n4Q0XPXSzgF3uz@juice-learnin-mongo.3m8qv.mongodb.net/loc8rem?retryWrites=true&w=majority'
    mongoose.connect(dbURI);

    //Monitor Mongoose connection events
mongoose.connection.on('connected', function() {
    return console.log(`Mongoose connected to ${dbURI}`)
})

mongoose.connection.on('error', err => {
    console.error(`Mongoose connection error:`, err);
})

mongoose.connection.on('disconnected', () => {
    console.log(`Mongoose disconnected`);
})



// Monitor Node process events:
// not being used currently
process.once('SIGUSR2', () => {
    gracefulShutdown('nodemon restart', () => {
        process.kill(process.pid, 'SIGUSR2');
    });
});

// This sprung to life when I added the datagrip plugin, coincidence? Or is it tuned to do what readline does?
process.on('SIGINT', () => {
    gracefulShutdown('app termination', () => {
        process.exit(0);
    });
});

process.on('SIGTERM', () => {
    gracefulShutdown('Heroku app shutdown', () => {
        process.exit(0);
    });
});

const gracefulShutdown = (msg, callback) => {
    mongoose.connection.close( () => {
        console.log(`Mongoose disconnected through ${msg}`);
        callback();
        });
};

process.on('uncaughtException', err => {
    console.error("This is cool", err.message);
    process.exit(1);
})

