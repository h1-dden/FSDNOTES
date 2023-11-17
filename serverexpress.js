const express=require('express');
const app=express()

//Alternative const app=require('express')()
app.get('/',(req,res)=>{
console.log(`user reached home`)
res.send(`Home page`)
})

app.get('/about',(req,res)=>{
    console.log(`user reached about page`)
    res.send(`about page`)
    })

app.all('*',(req,res)=>{
    res.status(404).send('<h1>Resource not found</h1>')
    console.log(`error`)
})

app.listen(3000,()=>{
    console.log('Server is listening')
})

//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use





