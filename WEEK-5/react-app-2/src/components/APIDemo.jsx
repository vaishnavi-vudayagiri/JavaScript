
import {useState, useEffect } from "react";

function APIDemo(){
    console.log("API demo rendered");
    let[users,setUsers]=useState([])
    let[loading,setloading]=useState(false)
    let[Error,setError]=useState(null);
    
    useEffect(()=>{

       async function getData() {
        setloading(true);
        try{
            let res = await fetch("https://jsonplaceholder.typicode.com/posts")
            let usersList = await res.json();
            setUsers(usersList);
        } catch (err){
            console.log("err is ",err);
            setError(err);
        }finally{

        }
        }
        getData();
    },[]);

    //deal ith loading state 
    if(loading){
       return <p className="text-center text-5xl">loading.....</p>
    }
    if(Error !== null){
        return<p className="text-center text-red-600 text-5xl">{Error.message }</p>
    }
    return(
        <div className="text-center mt-10">
            <h1 className="text-8xl text-blue-400">list of users </h1>
            <div className="grid gap5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                {users.map((userObj)=>(
                    <div key={userObj.id}>
                        <p>{userObj.title}</p>
                         <p>{userObj.body}</p>
                         </div>
                ))}
            </div>
        </div>
    );
}

       

export default APIDemo