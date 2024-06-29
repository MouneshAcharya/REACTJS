import TodoItem from "./TodoItem"

const TodoItems =({items, onDeleteHandler}) => {
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