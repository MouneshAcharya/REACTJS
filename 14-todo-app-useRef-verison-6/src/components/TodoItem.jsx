import styles from './TodoItem.module.css'
import { AiTwotoneDelete } from "react-icons/ai";

function TodoItem({index, todoName, date, onDeleteHandler}){

  const onDeleteItemHandler = () => {
    console.log("key in inner component -" +index);
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
            <button type="button" onClick={() => onDeleteItemHandler()}
            className={`btn btn-danger ${styles.todoBtn}`}><AiTwotoneDelete /></button>
            </div>
          </div>
        </div>
  
    )
  }
  
  export default TodoItem
  