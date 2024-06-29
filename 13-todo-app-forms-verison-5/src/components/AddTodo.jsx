
import { useState } from "react"
import styles from "./AddTodo.module.css"
import { MdOutlineAddComment } from "react-icons/md";

function AddTodo(props){

  const [todoName, setTodoName] = useState("")
  const [date, setDate] = useState("")

  const onTodoNameChangeHandler = (event) => {
    setTodoName(event.target.value)
  }

  const onDateChangeHandler = (event) => {
    setDate(event.target.value)
  }

  const onAddHandler = (event) => {
    event.preventDefault()
    const item = {
      "todoName" : todoName,
      "date" : date
    }
    console.log("items is => "+item)
    props.onItemAddHandler(item)
    setTodoName("")
    setDate("")
  }

  return (
    <div className={`container ${styles["todo-container"]}`}>
        <form onSubmit={(e) => onAddHandler(e)} className={`row ${styles["todo-row"]}`}>
          <div className="col-6">
            <input value={todoName} onChange={(event)=>onTodoNameChangeHandler(event)} type="text" placeholder="Enter the todo" />
          </div>
          <div className="col-4">
            <input value={date} onChange={(event)=>onDateChangeHandler(event)} type="date" />
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