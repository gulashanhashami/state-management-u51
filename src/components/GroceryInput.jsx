import { useState } from "react";

export const GroceryInput=({handleClick})=>{
    const [text, setText] =useState("");

    const handleChange=(e)=>{
         let query=e.target.value;
         setText(query);
    }
  

    return (
        <div>
        <input type="text" placeholder="Enter todo" onChange={handleChange} />
        <button className="sbtn" onClick={()=>handleClick(text)}>Add Grocery</button>
        </div>
    )
} 