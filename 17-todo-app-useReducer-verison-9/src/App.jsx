import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useReducer} from "react";
import Welcome from "./components/Welcome";
import { TodoContext } from "./store/TodoContext";

const reducerFns = (curItems, action) => {
  let items = []
  if(action.type === "NEW_ITEM"){
    items = [...curItems,action.payload.item]
  }
  if(action.type === "DELETE_ITEM"){
    let copyItems = [...curItems]
    copyItems.splice(action.payload.index,1)
    items = copyItems;
  }
  return items;
}

function App() {

  const [items, dispatchItems] = useReducer(reducerFns, [])

  const onItemAddHandler = (item) => {
    dispatchItems({
      type: "NEW_ITEM",
      payload: {
        item: item
      }
    })
  }

  const onDeleteHandler = (index) => {
    dispatchItems({
      type: "DELETE_ITEM",
      payload: {
        index:index
      }
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
