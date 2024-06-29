import './App.css'
import FoodItem from './components/FoodItem'

function App() {
  //let foodItems = []
  let foodItems = ["dal","milk", "fruits", "milk", "dry fruits"]

  if(foodItems.length == 0 )
    return (
      <>
      <p>no healthy food</p>
      </>
    )
  else 
    return (
      <>
        <h1>Healthy food</h1>
        <FoodItem foodItems={foodItems}/>
      </>
    )
}

export default App
