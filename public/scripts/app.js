'use strict';

console.log("App.js is running!");

//  App OBJECT: title/subtitle (CHALLENGE)

var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer'
};

// JSX - JavaScript XML (Provided by REACT)
// JSX Static variable
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  React.createElement(
    'p',
    null,
    app.subtitle
  )
);

//  User OBJECT: filled with user's personal information
var user = {
  name: 'Hamzah',
  age: 21,
  location: 'Tucson,AZ'
};
// Down below are User inputs in order to make the app dynamic 
var userName = 'Hamzah Firman';
var userAge = 21;
var userLocation = 'Tucson,AZ';

//  JSX Static variable (CHALLENGE)
//  {varName} helps to refrence a defined variable 
var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    userName.toUpperCase()
  ),
  React.createElement(
    'p',
    null,
    'Age: ',
    userAge + " years old"
  ),
  React.createElement(
    'p',
    null,
    'Location: ',
    userLocation
  )
);
// AppRoot fecthes element from HTML file using document API and by its ID using 
// getElemntById method.
var appRoot = document.getElementById('app');

// Render our app 
// Method : .render(arg1 [JSX you would like to render], arg2 [Where would you like to render?])
ReactDOM.render(template, appRoot);
