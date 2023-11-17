const express=require('express')
const router =express.Router()

//remove all /login as it becomes the base
router.post('/',(req,res)=>{
    console.log(req.body.email)//data is here from middleware
    const {email}=req.body
    if(email){
       return res.status(200).send(`Welcome to the login page ${email}`)
    }
    return res.status(200).send(`Enter some data ${email}`)
})

router.put('/new/:id',(req,res)=>{
 const {id}=req.params
 const {name}=req.body
 console.log(id,name)
 res.send('nice')
 //code to find from database and replace name
 //name is coming in the body of the request
})

router.delete('/:id',(req,res)=>{
    const {id}=req.params
    const {name}=req.body
    console.log(id,name)
    res.send('This is delete request')
    //code to find from database and delete data of the person
    //name is coming in the body of the request
})

module.exports=router