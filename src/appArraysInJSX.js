console.log("App.js is running!");

// In this file, we are learning about Arrays in JSX.
//  For example, an array of JSX 


const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};
// 'onFormSubmit' prevents full page refresh using .preventDefault method 
// and no data is added to the URL 
// 'e'- event object
const onFormSubmit = (e) => {
    e.preventDefault();
    
    // Hold user's value
    const option = e.target.elements.option.value;

    // Checks if option is empty or not and push into the array
    // if it's not empty 
    if(option) {
        app.options.push(option);

        // Reset the value 
        e.target.elements.option.value ='';
        // Re-rendering whenever a new option is added
        render();

        
    }
    
};
// Removes all items from the array by setting the array to EMPTY
const removeAll = () => {
    app.options = [];
    render();
};
const appRoot = document.getElementById('app');

// const numbers = [55, 101, 1000];

// JSX - JavaScript XML (Provided by REACT)
// JSX Static variable
const render = () => {
    const template = (
        <div>
           <h1>{app.title}</h1>
           {app.subtitle && <p>{app.subtitle}</p>}
           {app.options.length > 0 ? <p>Here are your options</p> : <p>No options</p>}
           <p>{app.options.length}</p>
           <button onClick={removeAll}>Remove All</button>
           {
               /* numbers.map((number) => {
                return <p key={number}>Number: {number}</p>;

               }) */
           }
           <ol>
            {app.options.map ((item) => {
                return <li key={item}>{item}</li>;

            })}
           </ol>
           <form onSubmit={onFormSubmit}> 
               <input type="text" name="option" placeholder="option"/>
               <button>Add Option</button>

           </form>
        </div>

    );
    ReactDOM.render(template, appRoot);
};

render();
