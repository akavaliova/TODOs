import { generateId } from "./utils.js";

export function getTodos() {
    const todos = localStorage.getItem("todos");
    return !!todos ? JSON.parse(todos) : null;
  }

  // Фцнкция , которая будет забрасывать тудушку в localstorage
export function addTodoToLocalStorage(inputText) {
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
 
  export function clearLocalStorage() {
    localStorage.removeItem("todos");
  }

 export function updateTodos(todos) {
    localStorage.setItem("todos", JSON.stringify(todos));
}

export function deleteTodoById(id) {
  let todos = getTodos();
  const updatedTodos = todos.filter(todo => todo.id !== id)
  updateTodos(updatedTodos);
}
