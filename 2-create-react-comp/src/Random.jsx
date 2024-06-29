/**
 * 
 * reuseable component 
 */

function Random(){

  let random = Math.random() * 10

  return <p>Random number is : {Math.floor(random)}</p>

}

export default Random