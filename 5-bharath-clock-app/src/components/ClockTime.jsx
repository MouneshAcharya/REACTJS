const ClockTime = () => {

let time =new Date();

  return (
    <p>This is the current time : {time.toLocaleDateString()} - {time.toTimeString()}</p>
  )
}

export default ClockTime