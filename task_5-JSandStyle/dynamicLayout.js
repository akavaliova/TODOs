"use strict"

// Initializing page - Creating "Add" / "Delete All" buttons and Input
function init() {
    const root = getRootElement();
    const wrapper = createElementWithClassName("div", "todo");
    const container = createContainer();
    const inputWrap = createElementWithClassName("div", "todo__input-wrap");
    const deleteAllButton = createDeleteAllButton();
    const input = createInputField();
    const addButton = createAddButton();

    root.append(wrapper);
    wrapper.append(container);
    container.append(inputWrap);
    inputWrap.append(deleteAllButton);
    inputWrap.append(input);
    inputWrap.append(addButton);
}

// Create new TODO block
function createNew() {
    let inputText = document.getElementById("todo__input-inp").value;
    const container = document.getElementById("todo_container");

    const list = createElementWithClassName("ul", "todo__list");
    const item = createElementWithClassName("li", "todo__list-item");
    const todoText = createTODOtext(inputText);
    const checked = createCheckedButton(todoText);
    const deleteWrap = createElementWithClassName("div", "todo__list-item--wrap");
    const deleteItem = createDeleteItem(list);
    const date = createDate();

    container.append(list);
    list.append(item);
    list.append(item);
    item.append(checked);
    item.append(todoText);
    item.append(deleteWrap);
    deleteWrap.append(deleteItem);
    deleteWrap.append(date);
}

function createElementWithClassName(tag, className) {
    let element = document.createElement(tag);
    element.setAttribute("class", className);
    return element;
}



// Handler for "Delete All" button
function deleteAll() {
    const todos = document.querySelectorAll('.todo__list');
    todos.forEach(todo => {
      todo.remove();
    });
}

function getRootElement() {
    return document.getElementById ("root"); 
}

function createContainer() {
    const containerBlock = document.createElement("div");
    containerBlock.setAttribute("id", "todo_container");
    return containerBlock;
}

function createDeleteAllButton(){
    const todoInputDelBtn = document.createElement("button");
    todoInputDelBtn.setAttribute("class", "todo__input-delBtn");
    const todoInputDelBtnText = document.createTextNode("Delete all");
    todoInputDelBtn.addEventListener("click", deleteAll);
    todoInputDelBtn.append(todoInputDelBtnText);
    return todoInputDelBtn;
}

function createInputField(){
    const todoInputInp = document.createElement("input");
    todoInputInp.setAttribute("id", "todo__input-inp");
    todoInputInp.setAttribute("placeholder", "Enter to do...");
    todoInputInp.setAttribute("type", "text");
    return todoInputInp;
}

function createAddButton(){
    const todoInputAddBtn = document.createElement("button");
    todoInputAddBtn.setAttribute("id", "todo__input-addBtn");
    const todoInputAddBtnText = document.createTextNode("Add");
    todoInputAddBtn.append(todoInputAddBtnText);
    todoInputAddBtn.addEventListener("click", createNew);
    return todoInputAddBtn;
}

function createTODOtext(anyText){
    const todoListItemPar = document.createElement("p");
    todoListItemPar.setAttribute("class", "todo__list-item--par");
    const todoListItemText = document.createTextNode(anyText);
    todoListItemPar.append(todoListItemText);
    return todoListItemPar;
}

function createCheckedButton(paragraph) {
    console.log("Creating Checked button, which going to make TODO text green colored");
    const todoListItemChecked = document.createElement("button");
    todoListItemChecked.setAttribute("class", "todo__list-item--checked");
    const todoListItemCheckedText = document.createTextNode("Check");
    todoListItemChecked.addEventListener('click', function() {
        paragraph.style.background='green';
    });
    todoListItemChecked.append(todoListItemCheckedText);
    return todoListItemChecked;

}

function createDeleteItem(list){
    console.log("Creating a button, which going to delete current list element");
    const todoListItemCancel = document.createElement("button");
    todoListItemCancel.setAttribute("class", "todo__list-item--cancel");
    const todoListItemCancelText = document.createTextNode("Cancel");
    todoListItemCancel.append(todoListItemCancelText);
    todoListItemCancel.addEventListener('click', function(){
        list.remove();
    })
    return todoListItemCancel;
}

function createDate(){
    console.log("Creating an actual date of providing TODO by user");
    const todoListItemDate = document.createElement("span");
    todoListItemDate.setAttribute("class", "todo__list-item--date");
    const todoListItemDateText = document.createTextNode(`${new Date().toLocaleDateString()}, ${new Date().toLocaleTimeString()}`);
    todoListItemDate.append(todoListItemDateText);
    return todoListItemDate;
}

init();
