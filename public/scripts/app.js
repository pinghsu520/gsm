'use strict';

console.log("App.js is running!");

// In this file, we are learning about Conditional 
// Rendering in JSX using IF STATEMENT, TERNARY OPERATOR
//  and LOGICAL OPERATOR 
// 
// IF Statement:
//  if(condition){
//     return value/stirng/etc. 
//  }else {
//    ...
//  }
// 
// Ternary Operators:
//  condition ? true : false
// 
// Logical and operator:
//  Example -> true && true 

//  App OBJECT: title/subtitle (CHALLENGE)

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
};

function getValue(arg1) {
    if (arg1.length > 0) {
        return 'Here are your options';
    } else {
        return 'No options';
    }
}
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
    app.subtitle && React.createElement(
        'p',
        null,
        'Subtitle:',
        app.subtitle
    ),
    app.options.length > 0 ? React.createElement(
        'p',
        null,
        'Here are your options'
    ) : React.createElement(
        'p',
        null,
        'No options'
    )
);
//  User OBJECT: filled with user's personal information
var user = {
    name: 'Hamzah Firman',
    age: 21,
    location: 'Tucson, AZ'

};
// Down below are User inputs in order to make the app dynamic 
var userName = 'Hamzah Firman';
var userAge = 21;
var userLocation = 'Tucson,AZ';

// This function have a conditional to check if user's location is 
// existed. 
function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    }
}
//  JSX Static variable (CHALLENGE)
//  syntax: {varName} helps to refrence a defined variable 
//  conditional: ternary operator -> checks whether user name exist
//  conditional: logical operator -> checks whether user age exist and it's 
//  greater or equal to 18 
//  conditionl: if statement -> (in function) checks if location exist
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user.location)
);
// AppRoot fecthes element from HTML file using document API and by its ID using 
// getElemntById method.
var appRoot = document.getElementById('app');

// Render our app 
// Method : .render(arg1 [JSX you would like to render], arg2 [Where would you like to render?])
ReactDOM.render(template, appRoot);
