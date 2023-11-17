const {createReadStream}= require('fs')

//2nd parameter is highwatermark obj-controls chunk size
//const stream =createReadStream('./bigfile.txt')
const stream =createReadStream('./bigfile.txt',
{highWaterMark:909090},
{encoding:'utf8'});

//default 64kb chunks of data is read
stream.on('data',(result)=>{
    console.log(result)
})

//error event handles error in the stream
stream.on('error',(err)=>{
    console.log(err)
})

stream.on('open',()=>{
    //data pushes data from read stream to write stream
    stream.pipe()
})
//transfer encoding== chunked in http header file
