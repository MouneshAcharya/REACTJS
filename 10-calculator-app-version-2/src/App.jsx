import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from "react"
import styles from './App.module.css'
import CalcButton from "./components/CalcButton"
import Display from "./components/Display"

function App() {

  const [btn, setBtn] = useState("")

  const btnClickHandler = (event,newValue) => {
    console.log(event,newValue)
    if(newValue === 'C'){
      setBtn("")
    } else if(newValue === '='){
      setBtn(eval(btn))
    } else {
      setBtn(btn + newValue)
    }    
    
  }

  return (
    <>
    <div className={styles.calculateContainer}>
      <Display btn={btn}/>
      <CalcButton btnClickHandler={btnClickHandler}/>
    </div>
    </>
  )
}

export default App
