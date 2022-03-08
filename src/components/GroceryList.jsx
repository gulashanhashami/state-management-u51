export const GroceryList=({title,id, status, deleteG, toggleG})=>{
    

    return (  
        <div>
        {title}
        {status}
        <button className="btn" onClick={()=>deleteG(id)}>Delete</button>
        <button  id="btn1" className="btn" onClick={()=>toggleG(id)}>Toggle</button>
       
        </div> 
    ) 
}