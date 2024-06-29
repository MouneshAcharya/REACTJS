const FoodItem = ({foodItems}) => {
  return (
    foodItems.map((item) => {
      return (
        <li>{item}</li>
      )
    })
  )
}

export default FoodItem