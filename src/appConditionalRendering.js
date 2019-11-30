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

// JSX - JavaScript XML (Provided by REACT)
// JSX Static variable
// 
// CHALLENGE: (1) Only render the subtitle (and p tag) IF subtitle 
// exist and (2) render new p tag - IF options.length > 0 'Here are your
// options"; "No options" otherwise  
 var template = (
 <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    {app.options.length > 0 ? <p>Here are your options</p> : <p>No options</p>}
 </div>
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
    if(location){
        return <p>Location: {location}</p>;
    }    
}
 //  JSX Static variable (CHALLENGE)
//  syntax: {varName} helps to refrence a defined variable 
//  conditional: ternary operator -> checks whether user name exist
//  conditional: logical operator -> checks whether user age exist and it's 
//  greater or equal to 18 
//  conditionl: if statement -> (in function) checks if location exist
 var templateTwo = ( 
     <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
     </div>
 )
// AppRoot fecthes element from HTML file using document API and by its ID using 
// getElemntById method.
var appRoot = document.getElementById('app');

// Render our app 
// Method : .render(arg1 [JSX you would like to render], arg2 [Where would you like to render?])
ReactDOM.render(template, appRoot);
