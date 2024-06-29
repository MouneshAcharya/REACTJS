import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from "react"
import './App.css'
import Container from "./components/Container"
import FoodInput from "./components/FoodInput"
import FoodItem from './components/FoodItem'

function App() {

  const [foodItems, setFoodItems] = useState([])

  const onKeyDownHandler = (event) => {
    if(event.key === 'Enter'){
      let updatedFoodItems = [...foodItems, event.target.value]
      setFoodItems(updatedFoodItems);
      event.target.value = "";
    }
  }

  // if(foodItems.length == 0 )
  //   return (
  //     <>
  //     <p>no healthy food</p>
  //     </>
  //   )
  // else 
    return (
      <Container>
        <h1>Healthy food</h1>
        <FoodInput onKeyDownHandler={onKeyDownHandler}/>
        {foodItems.length == 0 ? <p className="no-data-container">No healthy food available.. Please add</p> : null}
        <FoodItem foodItems={foodItems}/>
      </Container>
    )
}

export default App
