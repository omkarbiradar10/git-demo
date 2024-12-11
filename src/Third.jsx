import  {React, useReducer} from "react"

 export default function Third(){

    function reducer(state,action){
        switch(action){
            case 'add':
                return state+1;
            


             case 'sub':
                return state-1;  
                
                default:
                    return state;
            }

            
        };
            const inistate = 0;
            const [state ,dispatch] = useReducer(reducer,inistate);
    

    return(
        <>
        <div>
            <p>count :{state}</p>
            <button onClick={()=>dispatch('add')} >add</button>
            <button onClick={()=>dispatch('sub')} >add</button>

        </div>


       




        </>
    )

 }