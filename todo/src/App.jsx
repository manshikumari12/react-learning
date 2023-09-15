



import "./App.css";
import React from "react";

import TodoItem from "./Components/TodoItem";
import AddTodo from "./Components/AddTodo";



function App() {
 
  const [todo, setTodo] = React.useState([]);
 

  const handleAdd = (text) => {
    const newTodo = {
      title: text,
      status: false,
      id: Math.random() + Date.now().toLocaleString() + text,
    };
    setTodo([...todo, newTodo]);
  };

  console.log(todo);

  return (
    <div className="App">
    <AddTodo handleAdd={handleAdd}/>


      <div >
        {todo.map((todoItem) => (
         <TodoItem
         key={todoItem.id}
         title ={todoItem.title}
         status={todoItem.status}
         id={todoItem.id}
         />
        

        ))}
      </div>
    </div>
  );
}

export default App;


 // const [text, setText] = React.useState("");

 //text  = current state of inpute value
  //SetText  = updateer/dissptcher =everytime you want to update text state it can be update via set Text

  // setText("this becomes your updated text")

  // const handleInputchange = (e) => {
  //   setText(e.target.value);
  // };
