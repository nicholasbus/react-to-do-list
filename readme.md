# To-Do app made with the MERN stack

# Front End
- used React with bootstrap (react-bootstrap)
- there are three components: ItemList, NewItemButton, and NewItemForm
- ItemList calls upon a function which uses fetch to talk to the back end to get all of the items in the database and display them in a bootstrap ListGroup
- NewItemButton is a button that displays a bootstrap Modal with a form within it which makes a post request to the back end to create a new to-do item
- NewItemForm is a form that is used to edit items and also create new items. The component takes in props to set the value of the inputs if the form is used to edit the items.
- API.js is a group of functions that are used to make requests to the back end. All of the functions use fetch.

# Back End
- Used Express for the server. Used morgan to log requests. Used helmet for more secure HTTP headers. Used cors to enable specific request origins. Used mongoose to talk to the database (MongoDB). Used custom middlewares in middleware.js to handle errors. 
- The main api endpoint is /api/items. The /api/items GET route gets all of the items from the DB, the /api/items POST route attempts to make a new entry in the DB, the /api/items/edit/:id PUT route attempts to edit an item based on the id given in the URL params, and the /api/items/:id DELETE route attempts to delete an item from the database based on the id given in the URL params.
- Item.js within the models directory is the Item schema / design to store data for each item put into the database. 
