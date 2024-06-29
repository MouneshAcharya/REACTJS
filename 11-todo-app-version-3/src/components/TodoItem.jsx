import styles from './TodoItem.module.css'
function TodoItem({key, todoName, date, onDeleteHandler}){

  const onDeleteItemHandler = (index) => {
    onDeleteHandler(index)
  }
  
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
            <button type="button" onClick={() => onDeleteItemHandler(key)}
            className={`btn btn-danger ${styles.todoBtn}`}>Delete</button>
            </div>
          </div>
        </div>
  
    )
  }
  
  export default TodoItem
  