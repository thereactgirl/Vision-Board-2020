import React from "react";


const Vision = (props) => {
   
    
    return(
    <section onClick={() => props.toggle(props.v.id)} 
    className={props.v.completed ? "completed" : ""}
    >
        {props.v.name}
        
    </section>
    ); 
}

export default Vision;