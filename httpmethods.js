const express=require(`express`)
const app=express()

app.use(express.static('./public'))//send frontend
//app.use(express.urlencoded({extended:false}))
app.use(express.json())//get data sent by form

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

app.put('/login/:id',(req,res)=>{
 const {id}=req.params
 const {name}=req.body
 console.log(id,name)
 res.send('nice')
 //code to find from database and replace name
 //name is coming in the body of the request
})

app.delete('/login/:id',(req,res)=>{
    const {id}=req.params
    const {name}=req.body
    console.log(id,name)
    res.send('This is delete request')
    //code to find from database and delete data of the person
    //name is coming in the body of the request
})

app.listen(3000,()=>{
    console.log('Server is listening')
})