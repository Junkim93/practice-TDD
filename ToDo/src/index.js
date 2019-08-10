const inputData = document.querySelector(".input .text");
const list = document.querySelector(".list");
const clearBtn = document.querySelector(".clear");

let index = 0;

function deleteLocalTodo() {}

function deleteTodo(e) {
  const delBtn = e.target;
  const li = delBtn.parentNode;
  list.removeChild(li);
}

function clearLocalStorage() {
  localStorage.clear();
  index = 0;
  list.innerHTML = "";
}

function addDeleteBtn(li) {
  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "❌";
  li.appendChild(deleteBtn);
  deleteBtn.addEventListener("click", deleteTodo);
}

function loadLastIndex() {
  index = localStorage.length;
}

function loadData() {
  for (let i = 0; i < localStorage.length; i += 1) {
    const li = document.createElement("li");
    li.innerHTML = localStorage.getItem(i);
    list.appendChild(li);
    addDeleteBtn(li);
  }
}

function initInnerInput() {
  inputData.value = "";
}

function addToList() {
  const li = document.createElement("li");
  li.innerHTML = localStorage.getItem(index - 1);
  list.appendChild(li);
  initInnerInput();
  addDeleteBtn(li);
}

function saveLocalStorage(data) {
  localStorage.setItem(index, data);
  index += 1;
}

function handleSubmitData(e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    const data = inputData.value;
    saveLocalStorage(data);
    addToList();
  }
}

const init = () => {
  inputData.addEventListener("keypress", handleSubmitData);
  clearBtn.addEventListener("click", clearLocalStorage);
};

if (inputData) {
  init();
  loadData();
  loadLastIndex();
}
