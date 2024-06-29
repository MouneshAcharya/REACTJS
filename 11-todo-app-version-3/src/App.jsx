import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";

function App() {

  const [items, setItems] = useState([])

  const onItemAddHandler = (item) => {
    let copyItems = [...items,item]
    setItems(copyItems)
  }

  const onDeleteHandler = (index) => {
    let copyItems = [...items]
    copyItems.splice(index, 1);
    setItems(copyItems)
  }


  return (
    <center>
      <AppName />
      <AddTodo onItemAddHandler={onItemAddHandler}/>
      <TodoItems items={items} onDeleteHandler={onDeleteHandler}/>
    </center>
  );
}

export default App;
