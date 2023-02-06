"use strict"

function createTODOs() {
    console.log("==== Creating TODOs ====");
    getRootElement();
    createWrapper();
    createContainer();
    createInputWrap();
    createTODOlist();
    const root = document.getElementById ("root");

// div todo
const todoBlock = document.createElement("div");
todoBlock.setAttribute("class", "todo");

// div container
const containerBlock = document.createElement("div");
containerBlock.setAttribute("class", "container");

//div todo__input-wrap (includes: btn, input field and  btn)
const todoInputWrap = document.createElement("div");
todoInputWrap.setAttribute("class", "todo__input-wrap"); 
//button (todo__input-delBtn)
const todoInputDelBtn = document.createElement("button");
todoInputDelBtn.setAttribute("class", "todo__input-delBtn");
const todoInputDelBtnText = document.createTextNode("Delete all");
//input itself (todo__input-inp)
const todoInputInp = document.createElement("input");
todoInputInp.setAttribute("id", "todo__input-inp");
todoInputInp.setAttribute("placeholder", "Enter to do...");
todoInputInp.setAttribute("type", "text");

//button (todo__input-addBtn)
const todoInputAddBtn = document.createElement("button");
todoInputAddBtn.setAttribute("id", "todo__input-addBtn");
const todoInputAddBtnText = document.createTextNode("Add");

// UL
const todoList = document.createElement("ul");
todoList.setAttribute("id", "todo__list");
// li
const todoListItem = document.createElement("li");
todoListItem.setAttribute("class", "todo__list-item");
// checked button inside li
const todoListItemChecked = document.createElement("button");
todoListItemChecked.setAttribute("class", "todo__list-item--checked");
const todoListItemCheckedText = document.createTextNode("Check");
//p inside li
const todoListItemPar = document.createElement("p");
todoListItemPar.setAttribute("class", "todo__list-item--par");
const todoListItemText = document.createTextNode("Todo text");
// div wrap for delete button and  spandate
const todoListItemWrap = document.createElement("div");
todoListItemWrap.setAttribute("class", "todo__list-item--wrap");
// button cancel 
const todoListItemCancel = document.createElement("button");
todoListItemCancel.setAttribute("class", "todo__list-item--cancel");
const todoListItemCancelText = document.createTextNode("Cancel");
// span with a date
const todoListItemDate = document.createElement("span");
todoListItemDate.setAttribute("class", "todo__list-item--date");
const todoListItemDateText = document.createTextNode("Date");

// Appends First Part
root.append(todoBlock)
todoBlock.append(containerBlock);
containerBlock.append(todoInputWrap);
todoInputWrap.append(todoInputDelBtn);
todoInputDelBtn.append(todoInputDelBtnText);
todoInputWrap.append(todoInputInp);
todoInputWrap.append(todoInputAddBtn);
todoInputAddBtn.append(todoInputAddBtnText);
todoInputAddBtn.append(todoInputAddBtnText);
// Appends Second Part
containerBlock.append(todoList);
todoList.append(todoListItem);
todoListItem.append(todoListItemChecked);
todoListItemChecked.append(todoListItemCheckedText);
todoListItem.append(todoListItemPar);
todoListItemPar.append(todoListItemText);
todoListItem.append(todoListItemWrap);
todoListItemWrap.append(todoListItemCancel);
todoListItemCancel.append(todoListItemCancelText);
todoListItemWrap.append(todoListItemDate);
todoListItemDate.append(todoListItemDateText);

    console.log("==== All elements have been created =====");
}

function getRootElement () {
    console.log("Getting root id");
}

function createWrapper() {
    console.log("Creating wrapper");
}

function createContainer() {
    console.log ("Creating container");
}
function createInputWrap(){
    console.log("Creating wrap for Delete button, Input field  and Add button");
    createDeleteBtn();
    createInputField();
    addingTODOsBtn();
}
function createDeleteBtn(){
    console.log("Creating a button for deleting all TODOs from future unorderded list")
}
function createInputField(){
    console.log("Creating a field where users can type in their TODOs")
}
function addingTODOsBtn(){
    console.log("Creating a button for adding TODOs into future unordered list")
}
function createTODOlist(){
    console.log("Creating unordered list wrap which will include list elements with TODOs from users input field");
    createListElement();
}
function createListElement(){
    console.log("Creating list element which includes: check button, TODO text comming from input field, button for deleting TODO list element and date of creating TODO");
    createCheckedButton();
    createTODOtext();
    createDeleteAndDateWrap();
}
function createCheckedButton(){
    console.log("Creating Checked button, which going to make TODO text green colored");
}
function createTODOtext(){
    console.log("Getting text from input field and display it for user as a text");
}
function createDeleteAndDateWrap(){
    console.log("Creating aditional wrap for delete button and actual date");
    deleteCurrentTODO();
    createDate()
}
function deleteCurrentTODO(){
    console.log("Creating a button, which going to delete current list element")
}
function createDate(){
    console.log("Creating an actual date of providing TODO by user")
}


// // root
// const root = document.getElementById ("root");

// // div todo
// const todoBlock = document.createElement("div");
// todoBlock.setAttribute("class", "todo");

// // div container
// const containerBlock = document.createElement("div");
// containerBlock.setAttribute("class", "container");

// //div todo__input-wrap (includes: btn, input field and  btn)
// const todoInputWrap = document.createElement("div");
// todoInputWrap.setAttribute("class", "todo__input-wrap"); 
// //button (todo__input-delBtn)
// const todoInputDelBtn = document.createElement("button");
// todoInputDelBtn.setAttribute("class", "todo__input-delBtn");
// const todoInputDelBtnText = document.createTextNode("Delete all");
// //input itself (todo__input-inp)
// const todoInputInp = document.createElement("input");
// todoInputInp.setAttribute("id", "todo__input-inp");
// todoInputInp.setAttribute("placeholder", "Enter to do...");
// todoInputInp.setAttribute("type", "text");

// //button (todo__input-addBtn)
// const todoInputAddBtn = document.createElement("button");
// todoInputAddBtn.setAttribute("id", "todo__input-addBtn");
// const todoInputAddBtnText = document.createTextNode("Add");

// // UL
// const todoList = document.createElement("ul");
// todoList.setAttribute("id", "todo__list");
// // li
// const todoListItem = document.createElement("li");
// todoListItem.setAttribute("class", "todo__list-item");
// // checked button inside li
// const todoListItemChecked = document.createElement("button");
// todoListItemChecked.setAttribute("class", "todo__list-item--checked");
// const todoListItemCheckedText = document.createTextNode("Check");
// //p inside li
// const todoListItemPar = document.createElement("p");
// todoListItemPar.setAttribute("class", "todo__list-item--par");
// const todoListItemText = document.createTextNode("Todo text");
// // div wrap for delete button and  spandate
// const todoListItemWrap = document.createElement("div");
// todoListItemWrap.setAttribute("class", "todo__list-item--wrap");
// // button cancel 
// const todoListItemCancel = document.createElement("button");
// todoListItemCancel.setAttribute("class", "todo__list-item--cancel");
// const todoListItemCancelText = document.createTextNode("Cancel");
// // span with a date
// const todoListItemDate = document.createElement("span");
// todoListItemDate.setAttribute("class", "todo__list-item--date");
// const todoListItemDateText = document.createTextNode("Date");

// // Appends First Part
// root.append(todoBlock)
// todoBlock.append(containerBlock);
// containerBlock.append(todoInputWrap);
// todoInputWrap.append(todoInputDelBtn);
// todoInputDelBtn.append(todoInputDelBtnText);
// todoInputWrap.append(todoInputInp);
// todoInputWrap.append(todoInputAddBtn);
// todoInputAddBtn.append(todoInputAddBtnText);
// todoInputAddBtn.append(todoInputAddBtnText);
// // Appends Second Part
// containerBlock.append(todoList);
// todoList.append(todoListItem);
// todoListItem.append(todoListItemChecked);
// todoListItemChecked.append(todoListItemCheckedText);
// todoListItem.append(todoListItemPar);
// todoListItemPar.append(todoListItemText);
// todoListItem.append(todoListItemWrap);
// todoListItemWrap.append(todoListItemCancel);
// todoListItemCancel.append(todoListItemCancelText);
// todoListItemWrap.append(todoListItemDate);
// todoListItemDate.append(todoListItemDateText);

createTODOs();

















