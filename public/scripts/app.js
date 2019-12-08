'use strict';

console.log("App.js is running!");

// In this file, we are learning about Arrays in JSX.
//  For example, an array of JSX 


var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};
// 'onFormSubmit' prevents full page refresh using .preventDefault method 
// and no data is added to the URL 
// 'e'- event object
var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    // Hold user's value
    var option = e.target.elements.option.value;

    // Checks if option is empty or not and push into the array
    // if it's not empty 
    if (option) {
        app.options.push(option);

        // Reset the value 
        e.target.elements.option.value = '';
        // Re-rendering whenever a new option is added
        render();
    }
};
// Removes all items from the array by setting the array to EMPTY
var removeAll = function removeAll() {
    app.options = [];
    render();
};
var appRoot = document.getElementById('app');

// const numbers = [55, 101, 1000];

// JSX - JavaScript XML (Provided by REACT)
// JSX Static variable
var render = function render() {
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
        ),
        React.createElement(
            'p',
            null,
            app.options.length
        ),
        React.createElement(
            'button',
            { onClick: removeAll },
            'Remove All'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (item) {
                return React.createElement(
                    'li',
                    { key: item },
                    item
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option', placeholder: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

render();
