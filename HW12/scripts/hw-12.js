// "use strict";

import {createDeleteAllButton} from "./eventHandlers.js";
import{ createElementWithClassName, createElementWithID, deleteAll, generateId, changeTodoStyle, changeTodoBackground } from "./utils.js";
import { getTodos, addTodoToLocalStorage, clearLocalStorage, updateTodos, deleteTodoById } from "./todosStorage.js";

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

function getRootElement() {
  return document.getElementById("root");
}

function createInputField() {
  const todoInputInp = createElementWithID("input", "todo__input-inp");
  todoInputInp.setAttribute("placeholder", "Enter to do...");
  todoInputInp.setAttribute("type", "text");
  return todoInputInp;
}

function createAddButton() {
  const todoInputAddBtn = createElementWithID("button", "todo__input-addBtn");
  todoInputAddBtn.append("Add");
  //or we can write: todoInputAddBtn.innerText = "Add";
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
