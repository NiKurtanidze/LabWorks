import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import './AddItem.css'

function AddItem(props) {

    let [text, setText] = useState();

    const newText = (e) => {
        setText(text = e.target.value)
    }; 

    const emptyInput = () =>{
        setText('');
    }

    useEffect(() => {
        
      }, [props.list]);

    return (
        <div className='add-element'>
            <input type="text" id="myInput" value={text} onChange={newText} placeholder="Title..."/>
            <span className="addBtn" onClick={
                (e) => {props.addElementToList(e, text);
                        emptyInput();
                        }}>Add</span>
        </div>
    );
}

export default AddItem;
