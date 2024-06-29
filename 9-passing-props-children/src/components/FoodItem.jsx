import styles from "./FoodItem.module.css"

const FoodItem = ({foodItems}) => {
  return (
    foodItems.map((item) => {
      return (
        <div className={styles.listContainer}>
          <li className="fw-bolder list-group-item">{item} </li> 
          <button type="button" class="btn btn-info">Buy</button>
        </div>
      )
    })
  )
}

export default FoodItem