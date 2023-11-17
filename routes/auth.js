const express=require('express')
const router =express.Router()

router.get('/',(req,res)=>{
    console.log(`home page hit`)
    res.status(200).json({success:true,data:people})
})
module.exports=router