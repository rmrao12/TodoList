import React, { useState } from "react";
import TodoItem from "./TodoItem";

function Todo() {
  const [todosList, setTodos] = useState([]);
  const [todoValue, setValue] = useState("");

const handleValue=(e)=>{
    setValue(e.target.value)
}

  const handleSubmit = () => {    // checking if there a value in input if yes then add an item else return
   
    if (!todoValue) return;
    addTodo(todoValue);
    setValue("");
  };

  const addTodo = (text) => {                 // adding new item in the list
    const newTodos = [...todosList, { text, isEditing: false }];
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {    //deleting item from list on the basis of index
    const newTodos = [...todosList];
    console.log(newTodos)
   
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  console.log(todosList)

  const toggleEditTodo = (index) => {   //this medthod is use to enable and disable edit button on the basis of editing bool
    
    const newTodos = [...todosList];
    
   
    for (let i = 0; i < newTodos.length; i++) {
      if (i === index) {
      
        newTodos[i] = { ...newTodos[i], isEditing: !newTodos[i].isEditing };
      }
    }
  
   
    setTodos(newTodos);
  };

  const editTodo = (index, newText) => {   //use to save data on edit list save edited text on same index and enabling editing false
   
    const newTodos = [...todosList];
    
    
    for (let i = 0; i < newTodos.length; i++) {
      if (i === index) {
       
        newTodos[i] = { ...newTodos[i], text: newText, isEditing: false };
      }
    }
  
   
    setTodos(newTodos);
  };
  
  const todoItems = [];
  for (let i = 0; i < todosList.length; i++) {
    todoItems.push(
      <TodoItem key={i} index={i} todo={todosList[i]} deleteTodo={deleteTodo} toggleEditTodo={toggleEditTodo} editTodo={editTodo}/>  //to handle each added list item as individual component
    );
  }

  return (
    <div className="md:max-w-[500px] max-w-[300px] mt-10 my-0 mx-auto p-[20px] border-[1px] border-slate-400 rounded-md shadow-gray-600 bg-[#f9f9f9]">
      <p className="text-[30px] font-bold text-center">Todo List</p>
      <div className="flex justify-between p-[8px] mt-[5px]"> 
        <input type="text" className=" w-[80%] p-[10px] mb-[10px] border-[1px]  border-slate-400 rounded-md" value={todoValue} onChange={handleValue} 
        placeholder="Add a new todo"/>
       
        <button type="submit" onClick={handleSubmit} class="text-gray-900 bg-white border border-gray-300 focus:outline-none
         hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg 
         text-sm px-5 py-1.5 me-2 h-12 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700
          dark:hover:border-gray-600 dark:focus:ring-gray-700">
        Add</button>
      
        </div>

      <ul className="list-none p-0">
        {todoItems}
      </ul>
    </div>
  );
}

export default Todo;
