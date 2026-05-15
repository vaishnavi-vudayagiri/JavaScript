function Products(props){
    const { productObj } =props
return(
    <div className= " border-4">
    <h2 className=" text-blue-400 px-5 py-5 text-3xl">{ productObj.title}</h2>
    <p className="font-bold px-5 py-5">{ productObj.price}</p>
    <p className="font-bold px-5 ">{ productObj.description}</p>
 </div>
);
   
}
export default Products