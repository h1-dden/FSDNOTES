const express=require('express')
const app =express()
const logger=require('./loggermiddleware')

app.use(logger)//logger applied to all requests after this line

app.get('/',(req,res)=>{
    console.log(`user reached home`)
    res.send(`Home page`)
    })


app.get('/about',(req,res)=>{
        console.log(`user reached about page`)
        res.send(`about page`)
        })

 app.listen(3000,()=>{
            console.log('Server is listening')
        })