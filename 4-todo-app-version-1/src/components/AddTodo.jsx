function AddTodo(){

  let btnName = "Add"

  return (
    <div class="container todo-container">
        <div class="row todo-row">
          <div class="col-6">
            <input type="text" placeholder="Enter the todo" />
          </div>
          <div class="col-4">
            <input type="date" />
          </div>
          <div class="col-2">
          <button type="button" class="btn btn-success todo-btn">{btnName}</button>
          </div>
        </div>
    </div>
  )

}

export default AddTodo