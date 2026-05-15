//create http server
import exp from 'express'
export const userApp=exp.Router()

let users=[]

//create API(REST API-- REresentational State Transfer)
   //Route to handle GET req of client(http://localhost:9000/users)
   userApp.get('/user',(req,res)=>{
    //read all users &repsone
   res.json({message:"user not found"})
   })

   userApp.get('/users/:id',(req,res)=>{
    //get user from url
    let idOfUrl=Number(req.params.id)
    //find uder
    let user=users.find(userObj=>userObj.id==idOfUrl)
    //if user not found
  if(user==undefined){
    return res.json({message:"user not found"})
  }
    //send res
    res.json({message:"user found"})
   })


   //Route to handle POST req of client
   userApp.post('/users',(req,res)=>{
    //get user from client
    const newUser=req.body
    //ush user inti users
    users.push(newUser)
    //send res
    res.json({message:"user created"})
   
   })



   //Route to handle PUT req of client
   userApp.put('/users',(req,res)=>{
    //get modified user from client
    let modifiedUser=req.body;
    //get index of existing user in users array
    let index=users.findIndex(userObj=>userObj.id==modifiedUser.id)
    //if user not found
    if(index==-1){
        return res.json({message:"user not found"})
    }
    //update user with index
    users.splice(index,1,modifiedUser)
    //send res
    res.json({message:"user updated"})
   })



   //Route to handle DELETE req of client
   userApp.delete('/users/:id',(req,res)=>{
    //gget id of user from url parameter
    let idOfUrl=Number(req.params.id)
    //find index of user
    let index=users.findIndex(userObj=>userObj.id==idOfUrl)
    //user not found
    if(index==-1){
        return res.json({message:"user not found"})
    }
    //delete user by index
    users.splice(index,1)
    //send res
    res.json({message:"user removed"})
   })


