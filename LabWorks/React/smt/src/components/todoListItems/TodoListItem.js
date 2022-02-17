import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import './TodoListItem.css';

function TodoListItem(props) {
    let [list, setList] = useState(props.list);

    useEffect((e) => {
        setList(props.list)
      }, [props.list]);

    return (
        <div className="todo-list">
            <ul id="my-list">
                {list.map(elements =>{
                    if(elements.isDisplayed){

                        return(
                        <li className={elements.isDone}>
                            {elements.name}
                            <span className="to-be-done" 
                                name={elements.name}
                                onClick={(e) => {props.isDoneEventHandling(e, elements.name)}}>
                            </span>
                            <span className="close" 
                                name={elements.name}
                                onClick={(e) => {props.handleRemoveItem(e)}}>
                                x
                            </span>
                        </li>)
                    }
                })}
                    
            </ul>
        </div>
    );
}

export default TodoListItem;
