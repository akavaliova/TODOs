"use strict";

// Initializing page - Creating "Add" / "Delete All" buttons Input and empty UL element
function init() {
  const root = getRootElement();
  const wrapper = createElementWithClassName("div", "todo");
  const container = createElementWithID("div", "todo_container");
  const inputWrap = createElementWithClassName("div", "todo__input-wrap");
  const deleteAllButton = createDeleteAllButton();
  const input = createInputField();
  const addButton = createAddButton();
  const list = createElementWithID("ul", "todo__list");

  root.append(wrapper);
  wrapper.append(container);
  container.append(inputWrap);
  inputWrap.append(deleteAllButton);
  inputWrap.append(input);
  inputWrap.append(addButton);
  container.append(list);

  const todos = getTodos();
  if (Array.isArray(todos)) {
    todos.map(createNewTodoItem);
  }
}

// Create new TODO block
function createNew() {
  const input = document.getElementById("todo__input-inp");
  let inputText = input.value;
  if (!!inputText) {
    const todo = addTodoToLocalStorage(inputText);
    createNewTodoItem(todo);

    input.value = ""; //makes input field clean
    input.focus(); //makes cursor focused on input field
  }
}

// функция, которая при инициализации будет брать тудушки, если они есть и выстраивать их нам на страницу
function getTodos() {
  const todos = localStorage.getItem("todos");
  return !!todos ? JSON.parse(todos) : null;
}

function updateTodos(todos) {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function changeTodoStyle(tag, isDone) {
    tag.style.textDecoration = isDone ? "line-through" : "none";
}

function changeTodoBackground(tag, isDone) {
    tag.style.backgroundColor = isDone ? "green" : "transparent";
}

function generateId() {
  return Math.floor(Math.random() * 1000);
}

function clearLocalStorage() {
  localStorage.removeItem("todos");
}

function deleteTodoById(id) {
  let indexToDelete;
  let todos = JSON.parse(localStorage.getItem("todos"));
  for (let i = 0; i < todos.length; i++) {
    let todo = todos[i];
    if (todo.id === id) {
      indexToDelete = i;
      break;
    }
  }
  todos.splice(indexToDelete, 1);
  updateTodos(todos);
}

// Фцнкция , которая будет забрасывать тудушку в localstorage
function addTodoToLocalStorage(inputText) {
  const todos = getTodos() || [];

  const todo = {
    title: inputText,
    date: new Date().toLocaleString(),
    id: generateId(),
    isDone: false,
  };

  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));

  return todo;
}

function createNewTodoItem({ title, date, id, isDone }) {
  const list = document.getElementById("todo__list");
  const item = createElementWithClassName("li", "todo__list-item");
  const todoText = createTODOtext(title);
  const checked = createCheckedButton(item, todoText, id, isDone);
  const deleteWrap = createElementWithClassName("div", "todo__list-item--wrap");
  const deleteItem = createDeleteItem(item, id);
  const dateElement = createDate(date);

  list.append(item); // if we change append to prepend - it will add older list elements in the end and the new one at the beginning(it works)
  item.append(checked);
  item.append(todoText);
  item.append(deleteWrap);
  deleteWrap.append(deleteItem);
  deleteWrap.append(dateElement);
}

// ****************************************************************
// нужно перенести  в файл utils.js, но, не работает при переносе
function createElementWithClassName(tag, className) {
  let element = document.createElement(tag);
  element.setAttribute("class", className);
  return element;
}

function createElementWithID(tag, idName) {
  let idElement = document.createElement(tag);
  idElement.setAttribute("id", idName);
  return idElement;
}

function deleteAll() {
  const todos = document.querySelectorAll(".todo__list-item");
  todos.forEach((todoItems) => {
    todoItems.remove();
  });
  clearLocalStorage();
}

function getRootElement() {
  return document.getElementById("root");
}

function createDeleteAllButton() {
  const todoInputDelBtn = createElementWithClassName(
    "button",
    "todo__input-delBtn"
  );
  const todoInputDelBtnText = document.createTextNode("Delete all");
  todoInputDelBtn.addEventListener("click", deleteAll);
  todoInputDelBtn.append(todoInputDelBtnText);
  return todoInputDelBtn;
}

function createInputField() {
  const todoInputInp = createElementWithID("input", "todo__input-inp");
  todoInputInp.setAttribute("placeholder", "Enter to do...");
  todoInputInp.setAttribute("type", "text");
  return todoInputInp;
}

function createAddButton() {
  const todoInputAddBtn = createElementWithID("button", "todo__input-addBtn");
  const todoInputAddBtnText = document.createTextNode("Add");
  todoInputAddBtn.append(todoInputAddBtnText);
  todoInputAddBtn.addEventListener("click", createNew);

  return todoInputAddBtn;
}

function createTODOtext(anyText) {
  const todoListItemPar = createElementWithClassName(
    "p",
    "todo__list-item--par"
  );
  const todoListItemText = document.createTextNode(anyText);
  todoListItemPar.append(todoListItemText);
  return todoListItemPar;
}

function createCheckedButton(li, paragraph, id, isDone) {
  const todoListItemChecked = createElementWithClassName(
    "button",
    "todo__list-item--checked"
  );
  
  const todoListItemCheckedText = document.createTextNode("Check");
  todoListItemChecked.addEventListener("click", function () {
    let isDone;
    let todos = JSON.parse(localStorage.getItem("todos"));
    for (let i = 0; i < todos.length; i++) {
      let todo = todos[i];
      if (todo.id === id) {
        isDone = !todo.isDone;
        todo.isDone = isDone;
        break;
      }
    }
    updateTodos(todos);
    changeTodoStyle(paragraph, isDone);
    changeTodoBackground(li, isDone)
  });

  todoListItemChecked.append(todoListItemCheckedText);
  changeTodoStyle(paragraph, isDone);
  changeTodoBackground(li, isDone)
  return todoListItemChecked;
}

function createDeleteItem(item, id) {
  const todoListItemCancel = createElementWithClassName(
    "button",
    "todo__list-item--cancel"
  );
  const todoListItemCancelText = document.createTextNode("Cancel");
  todoListItemCancel.append(todoListItemCancelText);
  todoListItemCancel.addEventListener("click", function () {
    item.remove();
    deleteTodoById(id);
  });
  return todoListItemCancel;
}

function createDate(date) {
  const todoListItemDate = createElementWithClassName(
    "span",
    "todo__list-item--date"
  );
  const todoListItemDateText = document.createTextNode(date);
  todoListItemDate.append(todoListItemDateText);
  return todoListItemDate;
}

init();
