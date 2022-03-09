import List from "./List";
import { useState } from "react";

function Todo() {


    const [items, setItems] = useState([]);

    const [inputItem, setInputItem] = useState('');

    const add = () => {
        // three ... allow you to copy
        const tempItems = [...items];
        // pushes input item into the array
        tempItems.push(inputItem);
        
        // set the setItems array to be the tempItems array
        setItems(tempItems);  
        setInputItem('');
                    
    }

    const  remove = (index) => {
     const tempItems = [...items];
     
     tempItems.splice(index, 1)
     
     
     // set the setItems array to be the tempItems array
     setItems(tempItems);  
    }

// the event will return 
    const changeHandler = (event) => {
        const value = event.target.value;
        setInputItem(value);
    }




    return (
      <div className="Todo">
        <h1>ToBuy List</h1>
        {/* add value */}
        {/* add onchange chagehandler */}
        <input onChange={changeHandler} value={inputItem} />
       
        {/* make add button work with onCLick */}
        <button onClick={add}>Add</button>
        {/* llist component added here */}
        {/* give access to remove */}
        <List onRemove = {remove} items={items}/> 
        
      </div>
    );
  }
  
  export default Todo;