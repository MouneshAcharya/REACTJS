import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";

function App() {

  let items = [{
    todoName : "Buy milk",
    date : "13/05/2024"
  },{
    todoName : "Go to college",
    date : "13/05/2024"
  }]

  return (
    <center>
      <AppName />
      <AddTodo />
      <TodoItems items={items} />
    </center>
  );
}

export default App;
