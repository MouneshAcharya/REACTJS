import TodoItem from "./TodoItem"

const TodoItems =({items}) => {
  return (
    <>
    {
      items.map((item,i) => {
        return (
          <TodoItem key={i} todoName={item.todoName} date={item.date} />
        )
      })
    }
    </>
  )
}
export default TodoItems