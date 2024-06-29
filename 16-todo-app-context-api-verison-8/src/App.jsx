import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import Welcome from "./components/Welcome";
import { TodoContext } from "./store/TodoContext";

function App() {

  const [items, setItems] = useState([])

  const onItemAddHandler = (item) => {
    setItems((previousItems) => [...previousItems,item] )
  }

  const onDeleteHandler = (index) => {
    setItems((previousItems) => {
      let copyItems = [...previousItems]
      copyItems.splice(index,1)
      return copyItems;
    })
  }

  return (
    <TodoContext.Provider value={{
      items : items,
      onItemAddHandler : onItemAddHandler,
      onDeleteHandler : onDeleteHandler
    }}>
    <center>
      <AppName />
      <AddTodo />
      <Welcome />
      <TodoItems />
    </center>
    </TodoContext.Provider>
  );

}

export default App;
