"use strict"

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
}

// Create new TODO block
function createNew() {
    const input = document.getElementById("todo__input-inp");
    let inputText = input.value;
    if (!!inputText){
        const list = document.getElementById("todo__list");
        const item = createElementWithClassName("li", "todo__list-item");
        const todoText = createTODOtext(inputText);
        const checked = createCheckedButton(todoText);
        const deleteWrap = createElementWithClassName("div", "todo__list-item--wrap");
        const deleteItem = createDeleteItem(item);
        const date = createDate();
        
        list.append(item); // if we change append to prepend - it will add older list elements in the end and the new one at the beginning(it works)
        item.append(checked);
        item.append(todoText);
        item.append(deleteWrap);
        deleteWrap.append(deleteItem);
        deleteWrap.append(date);
        input.value = ""; //makes input field clean
        input.focus(); //makes cursor focused on input field
    }
}

function createElementWithClassName(tag, className) {
    let element = document.createElement(tag);
    element.setAttribute("class", className);
    return element;
}

function createElementWithID(tag, idName){
    let idElement = document.createElement(tag);
    idElement.setAttribute("id", idName);
    return idElement;
}

function deleteAll() {
    const todos = document.querySelectorAll('.todo__list-item');
    todos.forEach(todoItems => {
      todoItems.remove();
    });
}

function getRootElement() {
    return document.getElementById ("root"); 
}

function createDeleteAllButton(){
    const todoInputDelBtn = createElementWithClassName("button", "todo__input-delBtn")
    const todoInputDelBtnText = document.createTextNode("Delete all");
    todoInputDelBtn.addEventListener("click", deleteAll);
    todoInputDelBtn.append(todoInputDelBtnText);
    return todoInputDelBtn;
}

function createInputField(){
    const todoInputInp = createElementWithID("input", "todo__input-inp");
    todoInputInp.setAttribute("placeholder", "Enter to do...");
    todoInputInp.setAttribute("type", "text");
    return todoInputInp;
}

function createAddButton(){
    const todoInputAddBtn = createElementWithID("button", "todo__input-addBtn");
    const todoInputAddBtnText = document.createTextNode("Add");
    todoInputAddBtn.append(todoInputAddBtnText);
    todoInputAddBtn.addEventListener("click", createNew);
    return todoInputAddBtn;
}

function createTODOtext(anyText){
    const todoListItemPar = createElementWithClassName("p", "todo__list-item--par");
    const todoListItemText = document.createTextNode(anyText);
    todoListItemPar.append(todoListItemText);
    return todoListItemPar;
}

function createCheckedButton(paragraph) {
    const todoListItemChecked = createElementWithClassName("button", "todo__list-item--checked");
    const todoListItemCheckedText = document.createTextNode("Check");
    todoListItemChecked.addEventListener('click', function() {
        // paragraph.style.background='green'; this method willmake background static
        todoListItemChecked.parentElement.classList.toggle("active"); // this method allows turn on and turn off the  background color,but class active should be added into stylesheet
        // or we can do paragraph.classList.toggle("active") (then we will have background color only for paragraph)
        if (paragraph.style.textDecoration === "line-through") {
            paragraph.style.textDecoration = "none";
        } else {
            paragraph.style.textDecoration = "line-through";
        }
    });
    todoListItemChecked.append(todoListItemCheckedText);
    return todoListItemChecked;
}

function createDeleteItem(item){
    const todoListItemCancel = createElementWithClassName("button", "todo__list-item--cancel");
    const todoListItemCancelText = document.createTextNode("Cancel");
    todoListItemCancel.append(todoListItemCancelText);
    todoListItemCancel.addEventListener('click', function(){
        item.remove();
    })
    return todoListItemCancel;
}

function createDate(){
    const todoListItemDate = createElementWithClassName("span", "todo__list-item--date");
    const todoListItemDateText = document.createTextNode(`${new Date().toLocaleDateString()}, ${new Date().toLocaleTimeString()}`);
    todoListItemDate.append(todoListItemDateText);
    return todoListItemDate;
}

init();
