import { createElementWithClassName, deleteAll } from "./utils.js";

export function createDeleteAllButton() {
    const todoInputDelBtn = createElementWithClassName(
      "button",
      "todo__input-delBtn"
    );
    const todoInputDelBtnText = document.createTextNode("Delete all");
    todoInputDelBtn.addEventListener("click", deleteAll);
    todoInputDelBtn.append(todoInputDelBtnText);
    return todoInputDelBtn;
  }
