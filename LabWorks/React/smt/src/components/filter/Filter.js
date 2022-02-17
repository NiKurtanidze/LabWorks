import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import './Filter.css'

function Filter(props) {

    let [text, setText] = useState();

    let buttons = [
        {
            name: "finished",
            isChosen: false
        },
        {
            name: "not-finished",
            isChosen: false
        },
        {
            name: "all",
            isChosen: true
        },
]

    let [buttonOptions, setButtonOptions] = useState(buttons);

    const changeOption = (e, option) => {
        let array = [...buttonOptions]
        array.forEach(el =>{
            if(el.name.includes(option)){
                array[i].isChosen = true
            }else array[i].isChosen = false  
            i++;
        })
        setButtonOptions(array)
    }; 

    const newText = (e) => {
        setText(text = e.target.value)
    }; 


    useEffect(() => {
      }, [props.list]);

    return (
        <div className='filter'>
            <div id="myFilter">
                <div id="image"/>
                    <input type="text" id="search-bar" onChange={(e) => {newText(e);
                                                        props.filterItems(e, text)}} 
                    placeholder="Search for names.." title="Type in a name"/>
           
                </div>
            <span className="button finished" onClick={(e) =>{props.filterItemFinished(e)}}>Finished</span>
            <span className="button not-finished" onClick={(e) =>{props.filterItemNotFinished(e)}}>Not Finished</span>
            <span className="button all" onClick={(e) =>{props.filterItemAll(e)}}>All</span>
        </div>
    );
}

export default Filter;
