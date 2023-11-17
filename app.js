const express=require(`express`)
const app=express()

app.use(express.static('./public'))//send frontend
app.use(express.urlencoded({extended: false}))//get data sent by form

app.get('/home',(req,res)=>{
    console.log(`home page hit`)
    res.status(200).json({success:true,data:people})
})

app.post('/login',(req,res)=>{
    console.log(req.body.email)//data is here from middleware
    const {email}=req.body
    if(email){
       return res.status(200).send(`Welcome to the login page ${email}`)
    }
    return res.status(200).send(`Enter some data ${email}`)
})
app.listen(3000,()=>{
    console.log('Server is listening')
})