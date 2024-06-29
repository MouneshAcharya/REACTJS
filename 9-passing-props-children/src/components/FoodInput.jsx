import styles from './FoodInput.module.css'
const FoodInput = (props) => {
  return (
    <>
      <input onKeyDown={props.onKeyDownHandler} type="text" placeholder="enter the food..."/>
    </>

  )
}

export default FoodInput
