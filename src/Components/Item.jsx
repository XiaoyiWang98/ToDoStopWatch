import React from "react";
import TextItem from "./TaskItem";
import "../styles/Item.css"
function Item(props){
    return (
        <div className="item">
            <img 
                className="delete" 
                src={process.env.PUBLIC_URL+'/remove.svg'} 
                alt="Delete"
                onClick={()=>props.deleteItem(props.id)}
            />
            <TextItem timeUpdate={props.timeUpdate} task={props.task}/>
        </div>
    );
}

export default Item;