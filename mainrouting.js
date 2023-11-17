const express=require(`express`)
const app=express()
const peoplerouter=require('./routes/people')
const authrouter=require('./routes/auth')

app.use(express.static('./public'))//send frontend
app.use(express.json())//get data sent by form

app.use('/login',peoplerouter)//router applied to all with common path
app.use('/home',authrouter)

app.listen(3000,()=>{
    console.log('Server is listening')
})