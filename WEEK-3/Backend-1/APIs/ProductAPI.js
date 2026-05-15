//create http server
import exp from 'express'
export const productApp=exp.Router()

let product=[]
//read all product
     productApp.get('/product',(req,res)=>{
    //read all users &repsone
   res.json({message:"all product",payload:product})    
   })

   //read all product by brand
    productApp.get('/product/:id',(req,res)=>{
    //get user from url
    let idOfUrl=Number(req.params.id)
    //find uder
    let product=product.find(productObj=>productObj.id==idOfUrl)
    //if user not found
  if(product==undefined){
    return res.json({message:"user not found"})
  }
    //send res
    res.json({message:"user found"})
   })


//Route to handle POST req of client
   productApp.post('/product',(req,res)=>{
    //get user from client
    const newProduct=req.body
    //ush user inti users
    product.push(newProduct)
    //send res
    res.json({message:"user created"})
   
   })


   //update a product
//Route to handle PUT req of client
   productApp.put('/product',(req,res)=>{
    //get modified user from client
    let modifiedProduct=req.body;
    //get index of existing user in users array
    let index=product.findIndex(ProductObj=>ProductObj.id==modifiedProduct.id)
    //if user not found
    if(index==-1){
        return res.json({message:"user not found"})
    }
    //update user with index
    product.splice(index,1,modifiedProduct)
    //send res
    res.json({message:"user updated"})
   })




   //delete a product by id
   productApp.delete('/product/:id',(req,res)=>{
    let idOfUrl=Number(req.params.id)
    let index=product.findIndex(productObj=>productObj.id==idOfUrl)
    if(index==-1){
        return res.json({message:"user not removed"})
   }
   product.splice(index,1)
   res.json({message:"user removed"})
   })