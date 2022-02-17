import { useState } from 'react';

import './App.css';
import TodoListItem from './components/todoListItems/TodoListItem';
import AddItem from './components/addItem/AddItem';
import Filter from './components/filter/Filter'

function App() {
  const defaultList = [
  {name:'smt1', isDone: "is-done", isDisplayed:true},
  {name: 'smt2', isDone: "not-done", isDisplayed:true}, 
  {name:'smt3', isDone: "not-done", isDisplayed:true}, 
  {name:'smt4', isDone: "not-done", isDisplayed:true}
]

  let [list, setList] = useState(defaultList)


  const handleRemoveItem = (e) => {
    setList(list.filter(item => item.name !== e.target.getAttribute("name")))
  };


  const filterItems = (e, text) =>{
    let i = 0;
    let array = [...list]
    list.forEach(el =>{
      if(el.name.includes(text)){
        array[i].isDisplayed = true
      }else array[i].isDisplayed = false  
      i++;
    })
    setList(array)
  }

  const filterItemFinished = (e) =>{
    let i = 0;
    let array = [...list]
    list.forEach(el =>{
      if(el.isDone === "is-done"){
        array[i].isDisplayed = true
      }else array[i].isDisplayed = false  
      i++;
    })
    setList(array)
  }

  const filterItemNotFinished = (e) =>{
    let i = 0;
    let array = [...list]
    list.forEach(el =>{
      if(el.isDone === "not-done"){
        array[i].isDisplayed = true
      }else array[i].isDisplayed = false  
      i++;
    })
    setList(array)
  }

  const filterItemAll = (e) =>{
    let i = 0;
    let array = [...list]
    list.forEach(el =>{
      el.isDisplayed = true;
    })
    setList(array)
  }
  
  const addElementToList = (e, text) => {
    if(text === undefined || text === ''){
      alert('Please, enter the text')
      return
    }

    let condition = true
    list.forEach(item =>{
      if(item.name.includes(text)){
        alert('The task you want to add is already in the list')
        condition = false
        return
      }
    })

    if(condition){
      setList([...list, {name: text, isDone: "not-done", isDisplayed:true}])
    }
  }; 


  const isDoneEventHandling = (e, element) =>{
    let i = 0;
    list.forEach(el =>{
      if(el.name === element){
        let array = [...list]
        if(array[i].isDone == "is-done") array[i].isDone = "not-done"
        else array[i].isDone = "is-done"
        setList(array)
        return
      }
      i++;
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        
        <Filter list={list}
                filterItems={filterItems} 
                filterItemFinished={filterItemFinished}
                filterItemAll={filterItemAll}
                filterItemNotFinished={filterItemNotFinished}/>
        
        <TodoListItem list={list} handleRemoveItem={handleRemoveItem}
          isDoneEventHandling = {isDoneEventHandling} />

        <AddItem addElementToList={addElementToList} list={list}/>

      </header>
    </div>
  );
}

export default App;
