"use strict"

function deleteAll(){
    console.log("Delete entire TODO list");
}

// !!! не правильно, потому что срабатывает просто когда мышь ставишь в инпут
function inputTodo(){
    console.log("Display user's TODO text inside list element after pressing Add button(connected with Add button)");
}

function addTodo(){
    console.log("Creating entire list wrap after pressing Add button by user(connected with input field)");
} 

function checkTodo(){
    console.log("Making text green colored");
}

function cancelTodo(){
    console.log("Removes all current list item");
}

// ??? Show date
//  const dateSpan = createElement("span", "todo__date", `Date: ${new Date().toLocaleDateString()}`);
