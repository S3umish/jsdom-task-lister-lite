//  document.addEventListener("DOMContentLoaded", () => {
   // your code here
  const taskForm = document.querySelector("#create-task-form")
  const taskList = document.querySelector("#tasks")

taskForm.addEventListener("submit", function (addEventListener) {
    event.preventDefault()

    // have the user input
  const newTask = document.querySelector("#new-task-description").value


// const taskItem = document.createElement("li")
// taskItem.innerText = newTask
// taskList.appendChild(taskItem)


    taskList.innerHTML += `
       <li> ${newTask} 
        <button data-action="delete"> "X" cancel </button>
       </li>
        `
    taskForm.reset()
})

  taskList.addEventListener("click", function (event) {
    console.log(event.target)
    if (event.target.dataset.action == "delete") {
    event.target.parentElement.remove()
  }
})