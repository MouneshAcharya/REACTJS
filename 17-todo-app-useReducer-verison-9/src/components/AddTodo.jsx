
import { useContext, useRef, useState } from "react"
import styles from "./AddTodo.module.css"
import { MdOutlineAddComment } from "react-icons/md";
import { TodoContext } from "../store/TodoContext";

function AddTodo(){

  const {onItemAddHandler} = useContext(TodoContext)
  const todoName = useRef("")
  const date = useRef("")

  const onAddHandler = (event) => {
    event.preventDefault()
    console.log(todoName.current.value);
    console.log(date.current.value);
    const item = {
      "todoName" : todoName.current.value,
      "date" : date.current.value
    }
    onItemAddHandler(item)
    todoName.current.value = date.current.value = ""
  }

  return (
    <div className={`container ${styles["todo-container"]}`}>
        <form onSubmit={(e) => onAddHandler(e)} className={`row ${styles["todo-row"]}`}>
          <div className="col-6">
            <input
             type="text" ref={todoName} placeholder="Enter the todo" />
          </div>
          <div className="col-4">
            <input
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