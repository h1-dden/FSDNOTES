const express=require(`express`)
const app =express

//:ProductId  is express parameter
//This is always returned as a string so needs to be converted
app.get(`api/products/:productID`,(req,res)=>{

    const{productID}=req.params//tak req parameter as obj
    //products .find serches id in products array
    const Productdata=products.find((product)=>product.id=Number(productID))
    if(!Productdata)//product id not present in array
    {
       return res.status(404).send(<h1>Error not found!</h1>)
    }

    return res.json(Productdata)//send procuct data
})