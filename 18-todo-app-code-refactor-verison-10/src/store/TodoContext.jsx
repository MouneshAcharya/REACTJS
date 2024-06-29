import { createContext } from "react"
import { useReducer} from "react";

export const TodoContext = createContext({
  items : "",
  onItemAddHandler: () => {},
  onDeleteHandler : () => {}
})

const reducerFns = (curItems, action) => {
  let items = []
  if(action.type === "NEW_ITEM"){
    items = [...curItems,action.payload.item]
  }
  if(action.type === "DELETE_ITEM"){
    let copyItems = [...curItems]
    copyItems.splice(action.payload.index,1)
    items = copyItems;
  }
  return items;
}

const TodoContextProvider = ({children}) => {

  const [items, dispatchItems] = useReducer(reducerFns, [])

  const onItemAddHandler = (item) => {
    dispatchItems({
      type: "NEW_ITEM",
      payload: {
        item: item
      }
    })
  }

  const onDeleteHandler = (index) => {
    dispatchItems({
      type: "DELETE_ITEM",
      payload: {
        index:index
      }
    })
  }

  return (
  <TodoContext.Provider value={{
    items : items,
    onItemAddHandler : onItemAddHandler,
    onDeleteHandler : onDeleteHandler
  }}>
    {children}
  </TodoContext.Provider>
  )

}

export default TodoContextProvider