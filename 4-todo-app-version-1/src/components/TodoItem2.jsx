function TodoItem2(){

let todoName = "go to college"
let date = "13/05/2024"
let btnName = "Delete"

  return (
<div class="container todo-container">
        <div class="row todo-row">
          <div class="col-6">
            {todoName}
          </div>
          <div class="col-4">
            {date}
          </div>
          <div class="col-2">
          <button type="button" class="btn btn-danger todo-btn">{btnName}</button>
          </div>
        </div>
      </div>

  )
}

export default TodoItem2