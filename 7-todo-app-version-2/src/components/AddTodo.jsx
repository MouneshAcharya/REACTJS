
import styles from "./AddTodo.module.css"
function AddTodo(){

  return (
    <div className={`container ${styles["todo-container"]}`}>
        <div className={`row ${styles["todo-row"]}`}>
          <div className="col-6">
            <input type="text" placeholder="Enter the todo" />
          </div>
          <div className="col-4">
            <input type="date" />
          </div>
          <div className="col-2">
          <button type="button" className="btn btn-success todo-btn">Add</button>
          </div>
        </div>
    </div>
  )

}

export default AddTodo