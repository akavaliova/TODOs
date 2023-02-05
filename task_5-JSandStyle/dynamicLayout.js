"use strict"

// root
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

















