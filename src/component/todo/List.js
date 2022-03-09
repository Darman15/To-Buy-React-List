import Todo from "./Todo";


const List = (props) => {
  
   


    // convert array into array of html
    // map operator allows change of array to html array
    return props.items.map((item, index) => {
        return (
            <li>
                {item} 
                <button 
                onClick={() => props.onRemove(index)}>Delete</button>
                </li>
        )

    });
}


export default List;