"use strict"

function deleteAll(){
    console.log("By pressing Delete all button you delete entire TODO list");
    const todos = document.querySelectorAll('.todo__list');
    todos.forEach(todo => {
      todo.remove();
    });
}


function inputTodo(){
    console.log("We should taketext from user and transfer it into paragraph");
}

function addTodo(){
    console.log("Creating entire list wrap after pressing Add button by user(connected with input field)");
    let inputText = document.getElementById("todo__input-inp").value;

    const container = document.getElementById("todo_container");

    const list = createTODOlist();
    const item = createListElement();
    const checked = createCheckedButton();
    const text = createTODOtext(inputText);
    const deleteWrap = createDeleteAndDateWrap();
    const deleteItem = deleteCurrentTODO();
    const date = createDate();

    container.append(list);
    list.append(item);
    item.append(checked);
    item.append(text);
    item.append(deleteWrap);
    deleteWrap.append(deleteItem);
    deleteWrap.append(date);
}


function checkTodo(){
    console.log("Making text green colored");
    document.getElementById("check").style.color="red";
   
}

function cancelTodo(){
    console.log("Making text black");
    document.getElementById("check").style.color="black";
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
    todoList.setAttribute("class", "todo__list");
   
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

function createTODOtext(inputText){
    console.log("Getting text from input field and display it for user as a text");
    const todoListItemPar = document.createElement("p");
    todoListItemPar.setAttribute("class", "todo__list-item--par");
    const todoListItemText = document.createTextNode(inputText);
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
    const todoListItemDateText = document.createTextNode(new Date().toJSON());
    todoListItemDate.append(todoListItemDateText);

    return todoListItemDate;
}


// ??? Show date
//  const dateSpan = createElement("span", "todo__date", `Date: ${new Date().toLocaleDateString()}`);

