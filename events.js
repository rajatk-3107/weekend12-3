var events = require('events')
var emitter = new events.EventEmitter()

emitter.on('scream', () => {
    console.log("Screamed")
})

emitter.emit('scream')