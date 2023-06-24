const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "toDos";

let toDos = [];

function saveToDos() {
  localStorage.setItem("toDos", JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  toDos=toDos.filter(toDo=>toDo.id!=parseInt(li.id));
  saveToDos();
  console.log(typeof li.id);
  li.remove();
}

function paintToDo(newToDoObj) {
  const li = document.createElement("li");
  li.id = newToDoObj.id;
  const span = document.createElement("span");
  span.innerText = newToDoObj.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);

  toDoList.appendChild(li);
  span.classList.add("ToDo");
  button.classList.add("toDoBtn");
//   li.classList.add("ToDoList");
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(item) {
  console.log("this is turn of a " + item);
}

const savedToDos = localStorage.getItem(TODOS_KEY);
// console.log(savedToDos);
if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  // parsedToDos.forEach(sayHello);//함수에 각 요소 전달함.
  // parsedToDos.forEach((item)=>console.log("this is turn of a "+item));//람다식?
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

//filter
//arrays에서 요소를 삭제할 때, 실제로 요소를 지우는 것이 아니다. 
//진짜로 일어나는 일은 지우려는 요소(item)을 빼고 새로운 array를 만드는 것이다.
//즉, item을 지우는 것이 아닌 item을 제외하는 것이다.
// .filter함수를 사용하면 된다.

// array.filter(filterFunction) 
// filterFunctinon에 array의 각 요소를 전달.
// 반환값이 true면 새 array에 포함.
// 반환값이 false면 미포함.