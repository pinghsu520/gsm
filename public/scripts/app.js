'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Transforming to REACT Component (with ES6 Classes)
// Parent Component 
// CLASS: Renders all children classes 
// PROPS: title (str), subtitle (str) , options (array) 
var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.handlePick = _this.handlePick.bind(_this);
        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.state = {
            options: []
        };
        return _this;
    }

    // Method #1
    // Method: Randomly pick an option from the current array


    _createClass(IndecisionApp, [{
        key: 'handlePick',
        value: function handlePick() {
            var randomNum = Math.floor(Math.random() * this.state.options.length);
            var option = this.state.options[randomNum];
            alert(option);
        }
        // Method #2 
        // Method: Removes all elements in the current array 

    }, {
        key: 'handleDeleteOptions',
        value: function handleDeleteOptions() {
            this.setState(function () {
                return {
                    options: []
                };
            });
        }
        // Method #3
        // Method: Adds new option into the current array 

    }, {
        key: 'handleAddOption',
        value: function handleAddOption(option) {
            // Conditions
            // #1 
            if (!option) {
                return 'Enter valid value to add item';
            } else if (this.state.options.indexOf(option) > -1) {
                return 'This option already exists';
            };
            // Concats a new array with a new option with the current 
            // array
            this.setState(function (prevState) {
                return {
                    options: prevState.options.concat(option)

                };
            });
        }

        // Method #4 
        // Method: Renders all methods in IndecisionApp class

    }, {
        key: 'render',
        value: function render() {
            // Props 
            var title = 'Indecision';
            var subtitle = 'Put your life in the hands of a computer';
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: title, subtitle: subtitle }),
                React.createElement(Action, { hasOptions: this.state.options.length > 0,
                    handlePick: this.handlePick }),
                React.createElement(Options, { options: this.state.options,
                    handleDeleteOptions: this.handleDeleteOptions }),
                React.createElement(AddOption, { handleAddOption: this.handleAddOption })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);
// Child Component of Indecision #1 
// Class: Renders title and subtitle Props 


var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'render',

        // A special Method
        // MEHTOD: Renders everything inside this class 
        // PROPS:
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    this.props.title
                ),
                React.createElement(
                    'h2',
                    null,
                    this.props.subtitle
                )
            );
        }
    }]);

    return Header;
}(React.Component);

// Child Component of Indecision #2 
// Class: Randomly pick an oprion and alert it


var Action = function (_React$Component3) {
    _inherits(Action, _React$Component3);

    function Action() {
        _classCallCheck(this, Action);

        return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
    }

    _createClass(Action, [{
        key: 'render',


        // MEHTOD: Renders everything inside this class
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    {
                        onClick: this.props.handlePick,
                        disabled: !this.props.hasOptions
                    },
                    'What should I do?'
                )
            );
        }
    }]);

    return Action;
}(React.Component);

;

// Child Component of Indecision #3 

var Options = function (_React$Component4) {
    _inherits(Options, _React$Component4);

    function Options() {
        _classCallCheck(this, Options);

        return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
    }

    _createClass(Options, [{
        key: 'render',


        // A special Method
        // MEHTOD: Renders everything inside this class 
        value: function render() {
            return (
                // BELOW: Prints each item in the Array and each text is
                // 'Option' class props. 
                React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'button',
                        { onClick: this.props.handleDeleteOptions },
                        'Remove All'
                    ),
                    this.props.options.map(function (item) {
                        return React.createElement(Option, { key: item, itemText: item });
                    })
                )
            );
        }
    }]);

    return Options;
}(React.Component);

;

// Child Component of Indecision #4 

var AddOption = function (_React$Component5) {
    _inherits(AddOption, _React$Component5);

    // This 'handleAddOption' below is not overridin the one in 
    // 'IndecisionApp' class 
    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this5 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this5.handleAddOption = _this5.handleAddOption.bind(_this5);
        _this5.state = {
            error: undefined
        };
        return _this5;
    }

    _createClass(AddOption, [{
        key: 'handleAddOption',
        value: function handleAddOption(item) {
            // 'Item' is still an object 
            // '.preventDefault()' - Prevents the page from refreshinng once users submitted 
            item.preventDefault();

            // Grabs 'item' text
            // 'option' is item in text 
            // ".trim" - Removes all white spaces 
            var option = item.target.elements.option.value.trim();
            var error = this.props.handleAddOption(option);

            this.setState(function () {
                return { error: error };
            });
        }
        // A special Method
        // MEHTOD: Renders everything inside this class 

    }, {
        key: 'render',
        value: function render() {
            // Below: A Submit option form which allows users to add 
            // a new option(s)
            // 'OnSubmit' is similar to 'OnClick'
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.handleAddOption },
                    React.createElement('input', { type: 'text', name: 'option', placeholder: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        'Add Option'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

;

// Child Component of Options #1 

var Option = function (_React$Component6) {
    _inherits(Option, _React$Component6);

    function Option() {
        _classCallCheck(this, Option);

        return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
    }

    _createClass(Option, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.props.itemText
            );
        }
    }]);

    return Option;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
