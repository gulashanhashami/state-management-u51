import { useState } from "react";
import { GroceryInput } from "./GroceryInput";
import { GroceryList } from "./GroceryList";
import {v4 as uuid} from "uuid";
import "./Grocery.css";
export const Grocery=()=>{
    const [gdata, setGdata] = useState([]);
    const handleClick=(text)=>{
        let payload={
            title:text,
            status:false,
            id:uuid(),
        };
     const data=[...gdata, payload];
     setGdata(data);
    }
   
    
    const handleToggle=(item)=>{
        var arr1=[];
        //console.log(item)
        gdata.forEach((e)=>{
            if(e.id===item){
               e.status=!e.status;
            } 
            arr1.push(e);            
        })
        //console.log(arr1)
      setGdata(arr1)          
    }
    const deleteGrocery=(item)=>{ 
        let arr=[];                        //here e is a object which store text and status
         gdata.forEach((e)=>{
            if(e.id!== item){
                arr.push(e)
            }
         });
         setGdata(arr);
    }

    return (
        <>
        <div className="in">
        <GroceryInput handleClick={handleClick} />
        </div>
        {gdata.map((e)=>{
            return <div className="todobox"><GroceryList 
            deleteG={deleteGrocery}
            toggleG={handleToggle}
           
            id={e.id}
            title={e.title}  key={e.id} status={(e.status) ? <span>Completed</span> : <span>Progress</span>}
            
             />
             </div>
        })}
        </>
    )

}