
import { clearLocalStorage } from "./todosStorage.js";

export function createElementWithClassName(tag, className) {
    let element = document.createElement(tag);
    element.setAttribute("class", className);
    return element;
  }
  
export function createElementWithID(tag, idName) {
    let idElement = document.createElement(tag);
    idElement.setAttribute("id", idName);
    return idElement;
  }

  export function deleteAll() {
    const list = document.getElementById("todo__list");
    list.innerHTML = "";
    clearLocalStorage();
  }

   export function generateId() {
   return Math.floor(Math.random() * 1000);
 }


 export function changeTodoStyle(tag, isDone) {
  tag.style.textDecoration = isDone ? "line-through" : "none";
}

export function changeTodoBackground(tag, isDone) {
  tag.style.backgroundColor = isDone ? "green" : "transparent";
}

 