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

const app = {
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
 const template = (
 <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    {app.options.length > 0 ? <p>Here are your options</p> : <p>No options</p>}
 </div>
 );

//   Attributes:  'id', 'className', 
let count = 0;
// Functions below will be executed whenever user click buttons
// 
// Function: Prints 'addOne' 
const addOne = () => {
    console.log('addOne');
};
// Function: Prints 'minusOne'
const minusOne = () => {
    console.log('minusOne');
};
// Function: Prints 'reset'
const reset = () => {
    console.log('reset');
};
// 'templateTwo' is an Object 
 const templateTwo = (
    <div> 
        <h1>Count: {count}</h1>
        <div><button onClick={addOne}>+1</button></div>
        <div><button onClick={minusOne}>-1</button></div>
        <button onClick={reset}>reset</button>
    </div>
 );



//  CHALLENGE: Make a button '-1' -- set up minusOne function and register - log "minusOne"
//  Also, make reset button "reset" -- setup reset function -- log "reset"
 
 
// AppRoot fecthes element from HTML file using document API and by its ID using 
// getElemntById method.
const appRoot = document.getElementById('app');

// Render our app 
// Method : .render(arg1 [JSX you would like to render], arg2 [Where would you like to render?])
ReactDOM.render(templateTwo, appRoot);
