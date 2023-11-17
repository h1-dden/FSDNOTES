const express=require('express')
const app =express()

//logger function middleware
const logger=(req,res,next)=>{
    const method=req.method
    const url=req.url
    const time= new Date().getFullYear()
    console.log(method,url,time)  //logs all data
    next()//without next error gets thrown
}

app.get('/',logger,(req,res)=>{
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