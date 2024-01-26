const { EventEmitter } = require('events');

const emitter = new EventEmitter();

emitter.on('myevent', (data) => {
    console.log(data);
});

emitter.emit('myevent', 'This is my first Node.js event emitter example.');

