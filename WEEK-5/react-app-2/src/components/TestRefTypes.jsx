import { useState } from "react";

function TestRefType() {
//state
const [user,setUser]= useState({ username: "ravi",age:21,city:"hyd"})
const[marks,setMarks]=useState([10,20,30]);

//update user state
const updateUser = ()=> {
    setUser({...user,username:"bhanu",age:23})
};

const updateMarks = ()=>{
    setMarks([...marks,40]);
};
return (
    <div>
        


        <button onclick={updateUser}>updateUser</button>
    </div>
)

}
export default TestRefType