"use strict"

// Creating "Add", "Delete All", and Input 
function init() {
    console.log("==== Creating 'Add', Delete All', and Input  ====");
    const root = getRootElement();
    const wrapper = createWrapper();
    const container = createContainer();
    const inputWrap = createInputWrap();
    const deleteInpBtn = createDeleteBtn();
    const input = createInputField();
    const addButton = addingTODOsBtn();

    root.append(wrapper);
    wrapper.append(container);
    container.append(inputWrap);
    inputWrap.append(deleteInpBtn);
    inputWrap.append(input);
    inputWrap.append(addButton);
}

function createNew() {
    console.log("==== Adding new TODO ====");
    let inputText = document.getElementById("todo__input-inp").value;
    const container = document.getElementById("todo_container");

    const list = createTODOlist();
    const item = createListElement();
    const todoText = createTODOtext(inputText);
    const checked = createCheckedButton(todoText);
    const deleteWrap = createDeleteAndDateWrap();
    const deleteItem = deleteCurrentTODO();
    const date = createDate();

    container.append(list);
    list.append(item);
    item.append(checked);
    item.append(todoText);
    item.append(deleteWrap);
    deleteWrap.append(deleteItem);
    deleteWrap.append(date);
}

function deleteAll() {
    console.log("By pressing Delete all button you delete entire TODO list");
    const todos = document.querySelectorAll('.todo__list');
    todos.forEach(todo => {
      todo.remove();
    });
}

function getRootElement() {
    console.log("Getting root id");
    return document.getElementById ("root"); 
}

function createWrapper() {
    console.log("Creating wrapper");
    const todoBlock = document.createElement("div");
    todoBlock.setAttribute("class", "todo");

    return todoBlock;
}

function createContainer() {
    console.log ("Creating container");
    const containerBlock = document.createElement("div");
    containerBlock.setAttribute("id", "todo_container");

    return containerBlock;
}

function createInputWrap(){
    console.log("Creating wrap for Delete button, Input field  and Add button");
    const todoInputWrap = document.createElement("div");
    todoInputWrap.setAttribute("class", "todo__input-wrap"); 

    return todoInputWrap;
}

function createDeleteBtn(){
    console.log("Creating a button for deleting all TODOs from future unorderded list");
    const todoInputDelBtn = document.createElement("button");
    todoInputDelBtn.setAttribute("class", "todo__input-delBtn");
    const todoInputDelBtnText = document.createTextNode("Delete all");
    todoInputDelBtn.addEventListener("click", deleteAll);
    todoInputDelBtn.append(todoInputDelBtnText);
    return todoInputDelBtn;
}

function createInputField(){
    console.log("Creating a field where users can type in their TODOs");
    const todoInputInp = document.createElement("input");
    todoInputInp.setAttribute("id", "todo__input-inp");
    todoInputInp.setAttribute("placeholder", "Enter to do...");
    todoInputInp.setAttribute("type", "text");

    return todoInputInp;
}

function addingTODOsBtn(){
    console.log("Creating a button for adding TODOs into future unordered list");
    const todoInputAddBtn = document.createElement("button");
    todoInputAddBtn.setAttribute("id", "todo__input-addBtn");
    const todoInputAddBtnText = document.createTextNode("Add");
    todoInputAddBtn.append(todoInputAddBtnText);
    todoInputAddBtn.addEventListener("click", createNew);

    return todoInputAddBtn;
}

function createTODOlist(){
    console.log("Creating unordered list wrap which will include list elements with TODOs from users input field");
    const todoList = document.createElement("ul");
    todoList.setAttribute("class", "todo__list");

    return todoList;
}

function createListElement(){
    console.log("Creating list element which includes: check button, TODO text comming from input field, button for deleting TODO list element and date of creating TODO");
    const todoListItem = document.createElement("li");
    todoListItem.setAttribute("class", "todo__list-item");

    return todoListItem;
}

function createTODOtext(anyText){
    console.log("Getting text from input field and display it for user as a text");
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

function createDeleteAndDateWrap(){
    
    console.log("Creating aditional wrap for delete button and actual date");
    const todoListItemWrap = document.createElement("div");
    todoListItemWrap.setAttribute("class", "todo__list-item--wrap");
    
    return todoListItemWrap;
}

function deleteCurrentTODO(){
    console.log("Creating a button, which going to delete current list element");
    const todoListItemCancel = document.createElement("button");
    todoListItemCancel.setAttribute("class", "todo__list-item--cancel");
    const todoListItemCancelText = document.createTextNode("Cancel");
    todoListItemCancel.append(todoListItemCancelText);

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








