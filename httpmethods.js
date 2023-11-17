const express=require(`express`)
const app=express()

app.get('/home',(req,res)=>{
    console.log(`home page hit`)
})

app.listen(3000,()=>{
    console.log('Server is listening')
})