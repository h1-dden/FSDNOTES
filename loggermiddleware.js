//logger function middleware
const logger=(req,res,next)=>{
    const method=req.method
    const url=req.url
    const time= new Date().getFullYear()
    console.log(method,url,time)  //logs all data
    next()//without next error gets thrown
}
module.exports=logger