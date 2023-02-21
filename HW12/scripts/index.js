import {createDeleteAllButton} from "./eventHandlers.js";

import{ createElementWithClassName, createElementWithID, deleteAll, generateId, changeTodoStyle, changeTodoBackground } from "./utils.js";

import { getTodos, addTodoToLocalStorage, clearLocalStorage, updateTodos, deleteTodoById } from "./todosStorage.js";

export {createDeleteAllButton, 
    createElementWithClassName, 
    createElementWithID, 
    deleteAll, 
    generateId, 
    changeTodoStyle, 
    changeTodoBackground, 
    getTodos, 
    addTodoToLocalStorage, 
    clearLocalStorage, 
    updateTodos, 
    deleteTodoById }
    