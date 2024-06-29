/**
 * 
 * dynamic component
 */

function Hello(){

  let name = "mounesh"
  let getFullName = () => {
    return "Mounesh Acharya"
  }
  let age = 30
  return (
    <div>
      <h3> My name : {name}</h3>
      <h4> My full name : {getFullName()}</h4>
      <h5> My age : {age}</h5>
    </div>
  )

}

export default Hello