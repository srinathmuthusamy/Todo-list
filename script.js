// localStorage.clear()
//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const todoDiv = document.querySelector(".todo");
const filterDiv = document.querySelector(".select");
const filterOption = document.querySelector(".filter-todo");

//Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
// filterOption.addEventListener("click", filterTodo);

//Prompt
var prompt = prompt("What's Your Name");//var is used because the prompt does not pop in chrome when i use let or const 
document.querySelector('.name').textContent = `${prompt}'s Todo List`

//Funtions
function addTodo(event) {
  //PreventDefault
  event.preventDefault();
  //Todo Div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //Create LI
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  todoInput.value = "";
  //Add to local Storage 
  addLocalTodos(todoInput.value)
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  //Completed Button
  const completedBtn = document.createElement("button");
  completedBtn.innerHTML = '<i class="fas fa-check"></i>';
  completedBtn.classList.add("completed-btn");
  todoDiv.appendChild(completedBtn);
  //Trash Button
  const trashBtn = document.createElement("button");
  trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
  trashBtn.classList.add("trash-btn");
  todoDiv.appendChild(trashBtn);
  //Append
  todoList.appendChild(todoDiv);
}

function deleteCheck(e) {
  const item = e.target;
  //Delete
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.classList.add("fall");
    // todo.remove()
    todo.addEventListener("transitioned", function () {
      todo.remove();
    });
  }
  //Check
  if (item.classList[0] === "completed-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}
// function filterTodo(e) {
//   const todos = todoList.childNodes;
//   console.log(todos);
//   todos.forEach(function (todo) {
//     switch (e.target.value) {
//       case "all":
//         console.log('Works');
//         break;
//       case "completed":
//         if (todo.classlist.contains("completed")) {
//         console.log('Todo')
//     }
// ;
//   }
// }
// )
// }

function addLocalTodos(todo){
  let todos;
  if(localStorage.getItem('todos') === null){
    todos = [];
  }else {
    todos = JSON.parse(localStorage.getItem('todos'))
  }
  todos.push(todo)
  localStorage.setItem('todos', JSON.stringify(todos))
}
