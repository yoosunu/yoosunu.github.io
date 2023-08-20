const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDOList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  //   event.target.innerText = "✔";
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDO(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const ToDoSpan = document.createElement("span");
  ToDoSpan.innerHTML = newTodo.text;

  const button = document.createElement("button");
  const checkBox = document.createElement("input");
  button.innerHTML = "❌";
  checkBox.type = "checkbox";
  button.addEventListener("click", deleteToDo);

  li.appendChild(checkBox);
  li.appendChild(ToDoSpan);
  li.appendChild(button);
  toDOList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();

  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };

  toDos.push(newTodoObj);
  paintToDO(newTodoObj);
  saveToDos();

  //   console.dir(newTodoObj.id);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDO);
}

function removeFilter() {}

[1, 2, 3, 4].filter(removeFilter);
