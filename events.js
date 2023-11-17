const Eventemitter= require('events');

//2 ways-extend class eventemitter or create instance of class

const Eventobj= new Eventemitter()

//on and emit are main
Eventobj.on('response',(id)=>{
    console.log(`data found ${id}`)//if response string is found in emit we will log
})

//first input is matching string
// onwards are input params for call back fn
Eventobj.emit('response',34)

//OP==harsh@Harshs-MacBook-Air WEBDEV % node events.js
//data found 34
//harsh@Harshs-MacBook-Air WEBDEV % 
