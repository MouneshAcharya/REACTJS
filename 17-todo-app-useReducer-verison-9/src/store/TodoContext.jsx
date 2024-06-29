import { createContext } from "react"
export const TodoContext = createContext({
  items : "",
  onItemAddHandler: () => {},
  onDeleteHandler : () => {}
})