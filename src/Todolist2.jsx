import React from "react";
import { useReducer, useState } from "react";

function reducer(state ,action){

    switch(action.type){
        case "add": {
            let newarr = [...state]
        
            newarr.push(action.payload);
            
            return newarr;

          }

          case "delete":{
            let deletearr = [...state];

          deletearr.filter((_,index)=> index!==action.payload);
          
          return state;

          }

          
    }
    return state;
}
export default function Todolist2(){

    
    const[task,setTask] = useState([]);
    const[state, dispatch] = useReducer(reducer , []);

    

    return(
        <>
        <div>     
          <h3>task</h3>
          <input type="text" value={task} class="todo-input" onChange={(e)=>setTask(e.target.value)} />
          <button class="delete-btn" onClick={()=>dispatch({type:"add", payload:task})}>add</button>
         
         </div>

         {
         state.map((ele,index)=>{

         return(
            
            
            <div  key = {index}>
                
                <div>
                <h1 >{ele}</h1>
                <button class = "delete-btn"  onClick={()=>dispatch({type:"delete",payload:index})}>delete</button>
            </div>

            </div>
        
        );



         })
         
        
         
         
         }
          
        
        </>
    );
    
}