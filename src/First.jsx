import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";


 export default function First(){

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


      const handleInput=()=>{
        navigate('/second',{state:{x:name ,y:password}})

    }

    function gotoThird(){
      navigate('/Third');
    }

 return(
    <>
        <div class="todo-container">
            <input type="text"  name="usrename" id="username" onChange={(e)=>setName(e.target.value)}/>
            <br/>
            <input type="password" name="pahssword" id="password" onChange={(e)=>setPassword(e.target.value)} /> 
            <br/>
            
            <button onClick={handleInput}>click</button>
             </div>

           <div>
            <button onClick={gotoThird}>Third</button>
            </div>  

            <div >
               <button class="delete-btn"  onClick={()=>navigate('/Todolist')}>todolist</button>
            </div>

            <button class = "delete-btn" onClick={()=>navigate('/Todolist2')}>todolist2</button>

    </>
 )

}



