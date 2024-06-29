import { useContext } from "react"
import { TodoContext } from "../store/TodoContext"

const Welcome = () => {
  const {items} = useContext(TodoContext)
  return items.length === 0 && <h3>No Todo task, Please add...</h3>
}

export default Welcome

