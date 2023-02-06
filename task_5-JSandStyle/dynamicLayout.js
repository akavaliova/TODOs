"use strict"

function createTODOs() {
    console.log("==== Creating TODOs ====");

    // I part
    const root = getRootElement();
    const wrapper = createWrapper();
    const container = createContainer();
    const inputWrap = createInputWrap();
    const deleteInpBtn = createDeleteBtn();
    const input = createInputField();
    const addButton = addingTODOsBtn();

    // II part
    const list = createTODOlist();
    const item = createListElement();
    const checked = createCheckedButton();
    const text = createTODOtext();
    const deleteWrap = createDeleteAndDateWrap();
    const deleteItem = deleteCurrentTODO();
    const date = createDate();

    // I part appends
    root.append(wrapper);
    wrapper.append(container);
    container.append(inputWrap);
    inputWrap.append(deleteInpBtn);
    inputWrap.append(input);
    inputWrap.append(addButton);

    // II part appends
    container.append(list);
    list.append(item);
    item.append(checked);
    item.append(text);
    item.append(deleteWrap);
    deleteWrap.append(deleteItem);
    deleteWrap.append(date);

    console.log("==== All elements have been created =====");
}

function getRootElement () {
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
    containerBlock.setAttribute("class", "container");

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

    return todoInputAddBtn;
}

function createTODOlist(){
    console.log("Creating unordered list wrap which will include list elements with TODOs from users input field");
    const todoList = document.createElement("ul");
    todoList.setAttribute("id", "todo__list");
   
    createListElement();

    return todoList;
}

function createListElement(){
    console.log("Creating list element which includes: check button, TODO text comming from input field, button for deleting TODO list element and date of creating TODO");
    const todoListItem = document.createElement("li");
    todoListItem.setAttribute("class", "todo__list-item");

    createCheckedButton();
    createTODOtext();
    createDeleteAndDateWrap();

    return todoListItem;
}

function createCheckedButton(){
    console.log("Creating Checked button, which going to make TODO text green colored");
    const todoListItemChecked = document.createElement("button");
    todoListItemChecked.setAttribute("class", "todo__list-item--checked");
    const todoListItemCheckedText = document.createTextNode("Check");
    todoListItemChecked.append(todoListItemCheckedText);

    return todoListItemChecked;
}

function createTODOtext(){
    console.log("Getting text from input field and display it for user as a text");
    const todoListItemPar = document.createElement("p");
    todoListItemPar.setAttribute("class", "todo__list-item--par");
    const todoListItemText = document.createTextNode("Todo text");
    todoListItemPar.append(todoListItemText);

    return todoListItemPar;
}

function createDeleteAndDateWrap(){
    console.log("Creating aditional wrap for delete button and actual date");
    const todoListItemWrap = document.createElement("div");
    todoListItemWrap.setAttribute("class", "todo__list-item--wrap");
    deleteCurrentTODO();
    createDate();

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
    const todoListItemDateText = document.createTextNode("Date");
    todoListItemDate.append(todoListItemDateText);

    return todoListItemDate;
}

createTODOs();



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
// // div wrap for delete button and  span date
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



















