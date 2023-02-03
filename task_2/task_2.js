"use strict"

// задание 2:
// на основе скелета, созданного в задании 1, переписать динамическую верстку в js с помощью функций
// функции можно писать любые, главное, оптимизировать код и главное, чтобы при вписании текста и нажатии на ADD, выскакивали тудушки
// нужно, чтобы все кнопки стали рабочие 
// кнопка delete all должна удалять все элементы списка
// кнопка X должна удалять текущий элемент списка
// кнопка + может делать что угодно, например менять цвет лишки (типо что тудушка выполнена) - это на наше усмотрение


const root = document.getElementById ("root");

// !!!!!!!!!!!!!тут  я пытаюсь создать функцию для первого блока
// но не могу присвоить id к тегам вместо класса - не срабатывает
// и при отсутствии одного из параметров, функция перестает работать

// function createTag(tagName, className, text) {
//   const element = document.createElement(tagName);
//   element.classList.add(className);
 
//   if (!!className) {
//     element.classList.add(className);
//   }
//   if (!!text) {
//     element.append(text);
//   }
//   return element;
// }
// const todoSection = createTag("div", "todo-list");




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
 todoSectionInputAddBtn.setAttribute("id", "addButton");
 const todoSectionInputAddBtnText = document.createTextNode("Add");

 // Append

root.append(todoSection);
todoSection.append(todoSectionInput);
todoSectionInput.append(todoSectionInputDelBtn);
todoSectionInputDelBtn.append(todoSectionInputDelBtnText);
todoSectionInput.append(todoSectionInputEnter);
todoSectionInput.append(todoSectionInputAddBtn);
todoSectionInputAddBtn.append(todoSectionInputAddBtnText);


// UL 

 const list = document.createElement("ul");
 list.setAttribute("id", "todoList" );

 // append UL
 todoSection.append(list);


 // функция, которая создает элемент по некоторым параметрам
const createElement = (tagName, className, text) => {
    const element = document.createElement(tagName);
    element.classList.add(className);

    if(!!className){
        element.classList.add(className)
    }

    if(!!text){
        element.append(text)
    }
    return element
}

 //Функция добавления li к списку ul

 const createListItemElement = (todoText) =>{
    const liItem = createElement("li", "todo__item");
    const checkButton = createElement("button", "check-todo", "+");
    const paragraphElement = createElement("p", "todo__text", todoText);
    //new!!!
    const deleteWrap = createElement("div", "delete__wrap")
    const deleteButton = createElement("button", "delete-todo", "X");
    const dateSpan = createElement("span", "todo__date", `Date: ${new Date().toLocaleDateString()}`);

    liItem.append(checkButton, paragraphElement, deleteWrap);
    //NEW
    deleteWrap.append(deleteButton, dateSpan);
    // как это наружу вытянуть из функции? чтобы работало за пределами функции??????
    liItem.addEventListener("click", function(event){
        if(event.target.getAttribute("class") === "delete-todo"){
            console.log(event.target.parentElement.remove())
        }
    });

    return liItem
}



function handleAddButtonClick () {
    const todoText = document.getElementById("todoInput").value; // таким образом мы присваиваем в переменную  todoText  ссылку на тег input с айдишником "todoInput" 
    const listItem = createListItemElement(todoText);
    list.append(listItem)
}


todoSectionInputAddBtn.addEventListener("click", handleAddButtonClick);










































































