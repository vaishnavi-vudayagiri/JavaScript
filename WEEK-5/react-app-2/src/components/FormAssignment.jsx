import {useState} from "react";
import {useForm} from 'react-hook-form';

function FormAssignment(){
     const[users,setUsers] = useState([]);
     const {register,handleSubmit ,formState:{errors} }=useForm();
 const onFormSubmit = (newUserobj) =>{
     console.log(newUserobj);
            setUsers([...users,newUserobj])
        };
        return(
          <div>
        <div className="bg-amber-200 mx-70"> 
            <h1 className='text-center text-5xl'>Create User Form</h1>
            <form className="max-w-md mx-auto mt-10" onSubmit={handleSubmit(onFormSubmit)}>
                <div className='mb-3'>
                    <label htmlFor="firstName">firstName</label>
                    <input type ="text" {...register("firstName",{
                        required:"firstName required",
                        validate:(v)=>v.trim().length!==0 
                        //minLength:4
                    })}  id="firstName" className='border w-full p=3'/>
                    {errors.firstName?.type == "required"&& <p className="text-red-500">{errors.firstName.message}</p>}
                    {errors.firstName ?.type == "minLength"&& <p className="text-red-500">min length of user required is 4</p>}
                    {errors.firstName ?.type == "maxLength"&& <p className="text-red-500">max length of user requiredis 10</p>}
                    {errors.firstName ?.type == "validate"&& <p className="text-red-500"> white space is not valid</p>}

                    </div>

                    <div className='mb-3'>
                    <label htmlFor="email">email</label>
                    <input type ="email" {...register("email")}  id="email" className='border w-full p=3'/>
                    {errors.email?.type == "required"&& <p className="text-red-500">{errors.email.message}</p>}
                    </div>
               <div className='mb-3'>
                    <label htmlFor="dateOfBirth">dateOfBirth</label>
                    <input type ="date" {...register("dateOfBirth")}  id="dateOfBirth" className='border w-full p=3'/>
                    {errors.dateOfBirth ?.type == "required"&& <p className="text-red-500">{errors.dateOfBirth.message}</p>}
               </div>
               <button type="AddUser" className='bg-amber-400 p-4 block mx-auto'>AddUser</button>
               
            </form>
             </div>
             
             <div className='bg-red-500 mx-70 my-10 pb-60'>
                 <h1 className='text-center text-5xl p-2'>List Of Users</h1>
            
         <table className="text-center w-full">
          <thead>
               <tr>
                    <th> firstName</th>
                    <th>email</th>
                    <th>dateOfBirth</th>
               </tr>
          </thead>
<tbody>
              {users.map((userObj,index) => (
                <tr key={index}>
                  <td>{userObj.firstName}</td>
                  <td>{userObj.email}</td>
                  <td>{userObj.dateOfBirth}</td>
                </tr>
              ))}
            </tbody>
         </table>
           

            </div>
    </div>
        )};
export default FormAssignment
