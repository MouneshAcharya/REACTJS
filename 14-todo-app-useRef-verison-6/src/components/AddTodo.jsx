
import { useRef, useState } from "react"
import styles from "./AddTodo.module.css"
import { MdOutlineAddComment } from "react-icons/md";

function AddTodo(props){

  //const [todoName, setTodoName] = useState("")
  //const [date, setDate] = useState("")

  const todoName = useRef("")
  const date = useRef("")

  // const onTodoNameChangeHandler = (event) => {
  //   setTodoName(event.target.value)
  // }

  // const onDateChangeHandler = (event) => {
  //   setDate(event.target.value)
  // }

  const onAddHandler = (event) => {
    event.preventDefault()
    console.log(todoName.current.value);
    console.log(date.current.value);
    const item = {
      "todoName" : todoName.current.value,
      "date" : date.current.value
    }
    props.onItemAddHandler(item)
    todoName.current.value = date.current.value = ""

    //setTodoName("")
    //setDate("")
  }

  return (
    <div className={`container ${styles["todo-container"]}`}>
        <form onSubmit={(e) => onAddHandler(e)} className={`row ${styles["todo-row"]}`}>
          <div className="col-6">
            <input /*value={todoName} onChange={(event)=>onTodoNameChangeHandler(event)}*/
             type="text" ref={todoName} placeholder="Enter the todo" />
          </div>
          <div className="col-4">
            <input /*value={date} onChange={(event)=>onDateChangeHandler(event)}*/ 
            type="date" ref={date} />
          </div>
          <div className="col-2">
          <button className={`btn btn-success ${styles.todoBtn}`}>
            <MdOutlineAddComment />
          </button>
          </div>
        </form>
    </div>
  )

}

export default AddTodo