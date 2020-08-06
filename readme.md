# To-Do app made with the MERN stack

# Front End
- used React with bootstrap (react-bootstrap)
- there are three components: ItemList, NewItemButton, and NewItemForm
- ItemList calls upon a function which uses fetch to talk to the back end to get all of the items in the database and display them in a bootstrap ListGroup
- NewItemButton is a button that displays a bootstrap Modal with a form within it which makes a post request to the back end to create a new to-do item
- NewItemForm is a form that is used to edit items and also create new items. The component takes in props to set the value of the inputs if the form is used to edit the items.
- API.js is a group of functions that are used to make requests to the back end. All of the functions use fetch.

# Back End
- Used Express for the server. Used 
