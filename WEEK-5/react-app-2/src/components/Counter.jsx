import{useState} from"react";

function Counter(){
    //state
    const[count,setCount]=useState(0);
    //event handler function to modify the state
     const increament=()=>{
        setCount(count+1); 
      
    };
    const decreament=()=>{
        setCount(count-1);
    };
    const reset=(value)=>{
        setCount(value);
    };
    console.log("Counter component")
    return (
        <div className="text-center p-10 border">
            <h1 className="text-7xl  ">Count:{count}</h1>
            <button className="text-green-800 text-6xl "onClick={increament}> + </button>
            <button  className="text-red-600 text-6xl"onClick={decreament}>-</button>
            <button  className="text-blue-600 text-6xl"onClick={()=>{reset(0)}}>reset</button>
          
        </div>
    )
     
}
export default Counter;