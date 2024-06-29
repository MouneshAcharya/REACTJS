import { useEffect, useState } from "react";

const ClockTime = () => {
  console.log("clocktime component called...")

  const [time, setTime] = useState(new Date())

  useEffect(() => {
    console.log("use effect called...")
    const intervalId = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => {
      console.log("clearing ... useffect...")
      clearInterval(intervalId)
    }
  },
  [])

  return (
    <p>This is the current time : {time.toLocaleDateString()} - {time.toTimeString()}</p>
  )
}

export default ClockTime