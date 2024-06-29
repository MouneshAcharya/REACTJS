import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";
import Welcome from "./components/Welcome";
import TodoContextProvider, { TodoContext } from "./store/TodoContext";



function App() {

  return (
    <TodoContextProvider>
      <center>
        <AppName />
        <AddTodo />
        <Welcome />
        <TodoItems />
      </center>
    </TodoContextProvider>
  );

}

export default App;
