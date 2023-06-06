import React from "react";
import { useState } from "react";

const TodoList = ()=>{
    const[addValue,setValue]=useState("");
    const[nameList,setList]=useState([])
    const[flag,setFlag]=useState(false)

    const changeHandler =(event)=>{
        setValue(event.target.value);
        console.log(addValue);
    }
    const clickHandler =()=>{
        setList((prev)=>[...prev,addValue])
        setValue('');
    }
    const removeHandler =(index)=>{
        const removeItem=[...nameList]
        removeItem.splice(index,1)
        setList(removeItem)
    }
    var updateIndex='';
    const editHandler = (index)=>{
        const editItem=nameList[index]
        updateIndex=index;
        setValue(editItem);
    }
    const updateHandler =()=>{
        const updateItem=[...nameList];
        updateItem.splice(updateIndex,1,addValue);
        setList(updateItem)
        setFlag(true)
        setValue('')
    }


    return(
        <div className="container">
            <h1>TodoList</h1>
            <input type="text" onChange={changeHandler} value={addValue}/>
            {flag?(<button onClick={updateHandler}>update</button>):(<button onClick={(e)=>clickHandler(e.target.value)}>Add</button>)}
            <div className="list-sec">
                {nameList.map((obj,index)=>{
                    return(
                    <div key={index}>
                        <span>{obj}</span>
                        <button onClick={removeHandler}>Delete</button>
                        <button onClick={editHandler}>Edit</button>
                    </div>
                )})}
            </div>
        </div>
    )
}
export default TodoList;