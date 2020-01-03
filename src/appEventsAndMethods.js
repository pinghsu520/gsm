// Transforming to REACT Component (with ES6 Classes)
// Parent Component 
// CLASS: Renders all children classes 
// PROPS: title (str), subtitle (str) , options (array) 
class Indecision extends React.Component {
    render() {
        // Props 
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
        const options = ['Hamzah', 'Ping', 'Tristan'];
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action/>
                <Options options={options}/> 
                <AddOption/>
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
class Action extends React.Component {

    // MEHTOD (Button): Renders everything inside this class 
    handlePick()  {
        alert("handlePick");
    }
    // A special Method
    // MEHTOD: Renders everything inside this class
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        );
        
    }
};

// Child Component of Indecision #3 
class Options extends React.Component {

    // METHOD (Button) #1: Removes all options 
    handleRemoveAll(){
        alert("handleRemoveAll");
    }
     // A special Method
    // MEHTOD: Renders everything inside this class 
    render() {
        return (
            // BELOW: Printing each item in the Array and each text is
            // 'Option' class props. 
            <div>
                <button onClick={this.handleRemoveAll}>Remove All</button>
                {this.props.options.map ((item) => <Option key={item} itemText={item}/>)}
            </div>
        );
        
    };
};


// CHALLENGE: 
// 1. Setup the form with text input and submit button
// 2. Wire up onSubmit
// 3. 'handleAddOption'  -> fecth teh value typed -> if value, then alert


// Child Component of Indecision #4 
class AddOption extends React.Component {
    handleAddOption(item) {
        // 'Item' is still an object 
        // '.preventDefault()' - Prevents the page from refreshinng once users submitted 
        item.preventDefault();  

        // Grabs 'item' text
        // 'option' is item in text 
        // ".trim" - Removes all white spaces 
        const option = item.target.elements.option.value.trim();
        
        if (option){
            alert(option);
            
            // ".trim" - Removes all white spaces 
        }
    }
    // A special Method
    // MEHTOD: Renders everything inside this class 
    render() {
        // Below: A Submit option form which allows users to add 
        // a new option(s)
        // 'OnSubmit' is similar to 'OnClick'
        return (
            <div>
                <form onSubmit= {this.handleAddOption}>
                    <input type="text" name="option" placeholder="option"/>
                    <button>Submit</button>
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


ReactDOM.render(<Indecision/>, document.getElementById('app'));

