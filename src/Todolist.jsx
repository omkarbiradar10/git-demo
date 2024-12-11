
import React, { useState } from 'react';


export default function Todolist(){

 const [input , setInput] = useState('');
 const [item ,setItem] = useState([]);
 const[toggling ,setToggling] = useState([]);
const[ myindex, setMyIndex] = useState();
const[editval, setMyeditval] = useState('');
const[favorite,setFavorite] = useState([]);



    
 function addtodo(){
    let store = [...item];
    let toggled = [...toggling];
    toggled.push(false);
    store.push(input)
    
    setItem(store)
    setToggling(toggled);
    
    setInput('')
}

  
function deletedo(index){
    let removed = [...item];
    removed.splice(index,1);
    setItem(removed);
}

function editdo(index){
    setMyIndex(index);
    setMyeditval(item[index]);

}

function saveEdit(index){
    let updatedtext = [...item];
    updatedtext[index] = editval;
    setItem(updatedtext);
    setMyIndex(null);
    setMyeditval('');

}
function markdone(index){
    
    let newarr = [...toggling];
newarr.splice(index,1,true);
setToggling(newarr);
   
}

function favoritearr(index){
    let newarr1 = [...favorite];
    newarr1.push(index);
    setFavorite(newarr1);
    
}
console.log(favorite);

 return(
        <>
        <div class="todo-container">
            
            <h3>Task:</h3>
            <input type="text" value={input} class="todo-input"  onChange={(e)=>setInput(e.target.value)} />
            <button onClick={addtodo} class="add-btn">add</button>
            
        </div>

        <div>

        {
            item.map((ele ,index)=>{
                return(
                    <div class="list" key={index}>
                    <h1 class ={`item ${toggling[index] ? "line-through text-red-500" :""}`} id = "ele">{ele}</h1> 
                    <button class="delete-btn" onClick={()=>deletedo(index)}>delete</button>
                    <button class ="delete-btn" onClick={()=>editdo(index)}>edit</button>
                    <button class = "delete-btn" onClick={()=>markdone(index)}>done</button>
                    
                     {index==myindex && <><input   onChange={(e)=>setMyeditval(e.target.value)} 
                    
                    />
                    <button className="save-btn" onClick={() => saveEdit(index)}>Save</button>

                    
                    </>}
                    <button class = "delete-btn"onClick={()=>favoritearr(ele)} >favorite</button>
                   
                
                 </div>
                )
            })
        }
        </div>

        <div className='flex flex-col w-[40%] ml-[500px] font-center items-center  border mt-[20px] justify-center'  >
            <h2>favorites</h2> 
            <hr></hr>
            
           {favorite.map((ele)=>{
              return(
            
                <h3 className='bg-grey-500'>{ ele}</h3>
                
                
              )   
            

           })
           
           
           }

        </div>
        </>
    )

}