import "bootstrap/dist/css/bootstrap.min.css"
import styles from './App.module.css'
import CalcButton from "./components/CalcButton"
import Display from "./components/Display"

function App() {

  return (
    <>
    <div className={styles.calculateContainer}>
      <Display />
      <CalcButton />
    </div>
    </>
  )
}

export default App
