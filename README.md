MI-C3 Technical Test
=====================

### How to Use

```
git clone https://github.com/maxifjaved/mi-c3.git
cd mi-c3/
npm install
npm run server
open http://localhost:3000
```

### Linting

```
npm run lint
```

## Notes for Reader:

For the sake of transparency, I would like to declare the following, to ensure that I acted within the rules.


1. - The test shoould be submitted within 3 days.
2. - The list of people should be displayed in a table have column name, height, mass, created, edited, planet (link).
3. - The list of people must be fetched from https://swapi.co/api/people/
4. - As api return 10 records in total with the count of total records so on the basis of that i implemented the user pagination so that user can navigate through the pages and see the all users.
5. - On click of planet link a new modal is opened that contains the details of that planet using http://swapi.co/api/planets/1/.
6. - User can search throw the people list.
7. - I used following technologies/libraries to complete the test:
```
axios - for api request
classnames - manage conditional classes
express - setup server(if you want serverside rendering - out of scope for this excercise)
react - Templete/View engine
react-dom - render react to dom
redux - state management
react-router - Routing
redux-thunk - for async flow 
```

## Resources Used.

### Stater kit:
 - I used my other repo to start quickly: 
 ```
 https://github.com/maxifjaved/react-webpack-express-boilerplate
```

### CSS Links


### Data Table Link
```
https://bootsnipp.com/snippets/featured/striped-table-30
```

### Pagination Link
```
https://bootsnipp.com/snippets/featured/rounded-pagination
```

### Modal Link
```
https://bootsnipp.com/snippets/featured/squarespace-like-modal
```
