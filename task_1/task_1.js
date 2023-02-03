"use strict"

// задание:
// В ``HTML`` разметке создайте ``div`` с ``id='root'``
// Реализуйте верстку ``HTML`` полностью динамически с помощью javascript в созданный ``div`` 

// по итогу html файл будет только с одним дивом root, вся остальная верстка будет видна только в браузере в разделе Elements

// задание выполнено верно, структура документа получилась правильная

// идея такая, что при каждом вписании текста в поле "Enter todo..." будет добавляться li как элемент списка ul, с 
// вложенными в тег li кнопками +, X и текстом p

const root = document.getElementById ("root");
const todoSection = document.createElement("div");
todoSection.setAttribute("class", "todo-list");
const todoSectionInput = document.createElement("div");
todoSectionInput.setAttribute("class", "controlls");

// First button
 const todoSectionInputDelBtn = document.createElement("button");
 todoSectionInputDelBtn.setAttribute ("class", "todo__delete-btn");
 const todoSectionInputDelBtnText = document.createTextNode("Delete all");

 // Input 
 const todoSectionInputEnter = document.createElement("input"); 
 todoSectionInputEnter.setAttribute ("id", "todoInput");
 todoSectionInputEnter.setAttribute("type", "text");
 todoSectionInputEnter.setAttribute("placeholder", "Enter to do...");

 // second Button

 const todoSectionInputAddBtn = document.createElement("button");
 todoSectionInputAddBtn.setAttribute("class", "todo__add-btn");
 const todoSectionInputAddBtnText = document.createTextNode("Add");

// UL 

 const todoSectionList = document.createElement("ul");
 todoSectionList.setAttribute("id", "todoList" );

 // li (button, p, button and span with a date)

 const todoSectionListItem = document.createElement("li");
 todoSectionListItem.setAttribute("class", "todoList-item"); // !!!!!!!!!!! Узнать как избавиться от маркера черной точки
// first button inside li
 const todoSectionListBtn = document.createElement("button");
 todoSectionListBtn.setAttribute("class", "todoList-item--checkBtn");
 const todoSectionListBtnText = document.createTextNode("+"); // !!!!!!!!!!!узнать как вставить галочку
 // p inside li
 const todoSectionListItemParagraph = document.createElement("p");
 todoSectionListItemParagraph.setAttribute("class", "todoList-text");
 const todoSectionInputAddBtnParagraphText = document.createTextNode("Todo text");

// NEW!!! div
const deleteWrap = document.createElement("div");
deleteWrap.setAttribute("class", "delete__wrap");

 //second button inside li
 const todoSectionListCancelBtn = document.createElement("button");
 todoSectionListCancelBtn.setAttribute("class", "todoList-item--cancelBtn");
 const todoSectionListCancelBtnText = document.createTextNode("X");
 //span
 const todoSectionListDate = document.createElement("span");
 todoSectionListDate.setAttribute("class", "todoList-date");
 const todoSectionListDateText = document.createTextNode("Date");


// Append

root.append(todoSection);

todoSection.append(todoSectionInput);

todoSectionInput.append(todoSectionInputDelBtn);
todoSectionInputDelBtn.append(todoSectionInputDelBtnText);
todoSectionInput.append(todoSectionInputEnter);
todoSectionInput.append(todoSectionInputAddBtn);
todoSectionInputAddBtn.append(todoSectionInputAddBtnText);


todoSection.append(todoSectionList);
todoSectionList.append(todoSectionListItem);
todoSectionListItem.append(todoSectionListBtn);
todoSectionListBtn.append(todoSectionListBtnText);
todoSectionListItem.append(todoSectionListItemParagraph);
todoSectionListItemParagraph.append(todoSectionInputAddBtnParagraphText);

// !!!New div
todoSectionListItem.append(deleteWrap);

// cancel button and span вставляем внутрь нового div (deleteWrap)
deleteWrap.append(todoSectionListCancelBtn);
todoSectionListCancelBtn.append(todoSectionListCancelBtnText);
deleteWrap.append(todoSectionListDate);
todoSectionListDate.append(todoSectionListDateText);

















