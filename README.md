### TODOs

#### Task 1

- Create a div with id='root' in the HTML markup;
- Build the TODO application using HTML layout;
- The top part of the applocation should include a block with Input field, Add button and Delete all button.
- The bottom part should include unordered list, which li elements include check button, text receiving from the input field, cancel button and date/time of creating a card;
- Add stylesheet.

#### Task 2
- Rewrite HTML layout fully dynamically with javascript into the created div;
- The application should add a new case card when the **`Add`** button is clicked;
- Pressing the **`Delete All`** button should delete all cards;
- When you press the **`Cancel`** button, delete exactly the card on which the button was clicked;
- When you click on **`Check`** button it will change the background color of the card and strikethrough the text inside it;
- The field with the date is generated automatically with using the **`new Date()`** object.

#### Task 3
- Create `todos` key in `localStorage`;
- Write two functions `getName` and `setName` to get and save data to `localStorage`;
- Don't forget to check `localStorage` by key if it doesn't exist;
- After reloading the page, the states of the cards `checked` / `unchecked` should be preserved;
- `Id` for cards must be different and dynamically generated;
- Case card data storage structure:
- Const todos = [{}, {}, {}, {}, {}, {}, {}, {}];
- The case card object must contain the following fields:
- const todo = {  

            id: 1,  

            date: '19:35 17 sept',  

            text: 'Play video games',  

            isChecked: true,  
            
        }