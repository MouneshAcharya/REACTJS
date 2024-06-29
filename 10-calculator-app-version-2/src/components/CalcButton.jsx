import styles from "./CalcButton.module.css"
const CalcButton = (props) => {

  let btns = ["C","1","2","+","3","4","-","5","6","*","7","8","/","=","9","0","."]
  return (
    <>
      <div className={styles.buttonContainer}>
        {btns.map((btn)=> <button onClick={(event) => props.btnClickHandler(event,btn)} className={styles.calcBtn}>{btn}</button>)}
      </div>
    </>
  )
}

export default CalcButton