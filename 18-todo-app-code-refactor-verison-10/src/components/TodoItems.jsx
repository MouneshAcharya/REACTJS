import { useContext } from "react"
import { TodoContext } from "../store/TodoContext"
import TodoItem from "./TodoItem"

const TodoItems =() => {
  const {items, onDeleteHandler} = useContext(TodoContext)

  return (
    <>
    {
      items.map((item,i) => {
        return (
          <TodoItem key={i} index={i} todoName={item.todoName} date={item.date} onDeleteHandler={onDeleteHandler} />
        )
      })
    }
    </>
  )
}
export default TodoItems