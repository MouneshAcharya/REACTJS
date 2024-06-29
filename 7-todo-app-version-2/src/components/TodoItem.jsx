import styles from './TodoItem.module.css'
function TodoItem({todoName, date}){
  
    return (
  <div className={`container ${styles["todo-container"]}`}>
          <div className={`row ${styles["todo-row"]}`}>
            <div className="col-6">
              {todoName}
            </div>
            <div className="col-4">
              {date}
            </div>
            <div className="col-2">
            <button type="button" className="btn btn-danger todo-btn">Delete</button>
            </div>
          </div>
        </div>
  
    )
  }
  
  export default TodoItem
  