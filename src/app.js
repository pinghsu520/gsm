// Transforming to REACT Component (with ES6 Classes)
// Parent Component 
<<<<<<< HEAD
// CLASS: Renders all children classes 
// PROPS: title (str), subtitle (str) , options (array) 
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handlePick = this.handlePick.bind(this);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state= {
            options:[]
        }
    }

    // Method #1
    // Method: Randomly pick an option from the current array
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum]
        alert(option)
    }
    // Method #2 
    // Method: Removes all elements in the current array 
    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            }
        });
    }
    // Method #3
    // Method: Adds new option into the current array 
    handleAddOption(option){
        // Conditions
        // #1 
        if(!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1){
            return 'This option already exists';
        };
              // Concats a new array with a new option with the current 
        // array
        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option)

            };
        });
    }

    // Method #4 
    // Method: Renders all methods in IndecisionApp class
=======
//  CLASS: Renders all children classes 

//trolled

class Indecision extends React.Component {
>>>>>>> 987d9bd4e5ab8e9cd4371c6c13547631dc9e697a
    render() {
        // Props 
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action hasOptions={this.state.options.length > 0}
                handlePick = {this.handlePick}/>
                <Options options={this.state.options}
                handleDeleteOptions ={this.handleDeleteOptions}/> 
                <AddOption handleAddOption= {this.handleAddOption}/>
            </div>
        );

    }
}
// Child Component of Indecision #1 
// Class: Renders title and subtitle Props 
class Header extends React.Component {
    // A special Method
    // MEHTOD: Renders everything inside this class 
    // PROPS:
    render() {
        return (
            <div>
            <h1>{this.props.title}</h1>
            <h2>{this.props.subtitle}</h2>
        </div>
        );
        
    }
}

// Child Component of Indecision #2 
// Class: Randomly pick an oprion and alert it
class Action extends React.Component {

    // MEHTOD: Renders everything inside this class
    render() {
        return (
            <div>
                <button 
                onClick={this.props.handlePick}
                disabled={!this.props.hasOptions}
                >What should I do?</button>
            </div>
        );
        
    }
};

// Child Component of Indecision #3 
class Options extends React.Component {
    
     // A special Method
    // MEHTOD: Renders everything inside this class 
    render() {
        return (
            // BELOW: Prints each item in the Array and each text is
            // 'Option' class props. 
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                {this.props.options.map ((item) => <Option key={item} itemText={item}/>)}
            </div>
        );
        
    };
};


// Child Component of Indecision #4 
class AddOption extends React.Component {
    // This 'handleAddOption' below is not overridin the one in 
    // 'IndecisionApp' class 
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }
    handleAddOption(item) {
        // 'Item' is still an object 
        // '.preventDefault()' - Prevents the page from refreshinng once users submitted 
        item.preventDefault();  

        // Grabs 'item' text
        // 'option' is item in text 
        // ".trim" - Removes all white spaces 
        const option = item.target.elements.option.value.trim();
        const error  = this.props.handleAddOption(option);

        this.setState(() => {
            return { error };
        });
            
    }
    // A special Method
    // MEHTOD: Renders everything inside this class 
    render() {
        // Below: A Submit option form which allows users to add 
        // a new option(s)
        // 'OnSubmit' is similar to 'OnClick'
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit= {this.handleAddOption}>
                    <input type="text" name="option" placeholder="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
};

// Child Component of Options #1 
class Option extends React.Component {
    render() {
        return (
            <div>
              {this.props.itemText}
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

