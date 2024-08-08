import React, { useState } from "react";

function TodoItem({ todo, index, deleteTodo, toggleEditTodo, editTodo }) {
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    toggleEditTodo(index);
  };

  const handleSave = () => {  //calling edittodo function from todo.jsx
    editTodo(index, editText);
  };
  

  return (
    <li className="flex justify-between p-[8px] mt-[5px] bg-[#fff] border-[1px] border-[#ddd] rounded-md">  {/*if isediting is true then enable save and input tag if false then simple show current list item text, delete button and edit button */}
      {todo.isEditing ? (
        <>
          <input type="text" value={editText} className=" w-[80%] border-[1px]  border-slate-400 rounded-md"
          onChange={(e) => setEditText(e.target.value)}/>            
          <button onClick={handleSave}
          class="text-gray-900 bg-white border border-gray-300 focus:outline-none
          hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg 
          text-sm px-5 py-1.5 me-2 p  dark:bg-gray-800 dark:text-white dark:border-gray-600
           dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
         Save</button>
        </>
      ) : (
        <>
          <span className="  flex-1 content-center">{todo.text}</span>
          <button onClick={handleEdit} type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none
           hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg 
           text-sm px-5 py-1.5 me-2  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
          Edit</button>
          <button onClick={() => deleteTodo(index)}type="button" class="text-gray-900
           bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 
           focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-1.5 
           me-2  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
          Delete</button>
        </>
      )}
    </li>
  );
}

export default TodoItem;