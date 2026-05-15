//create HTTP server
import exp from'express'
const app=exp();
import { userApp } from './APIs/UserAPI.js';
import { productApp } from './APIs/ProductAPI.js';


//use body arser middleware
app.use(exp.json())
//forward re to user api if path starts with /user-api
app.use('/user-api',userApp)

//forward re to product api if path starts with /product-api
app.use('/product-api',productApp)

//set a port number
const port = 9000
//assign port number to HTTP server
app.listen(port,()=>console.log(`server listening to port ${port}...`))

