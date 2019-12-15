// Transforming to REACT Component (with ES6 Classes)
// Parent Component 
//  CLASS: Renders all children classes 
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
      // A special Method
    // MEHTOD: Renders everything inside this class 
    render() {
        return (
            <div>
                <button>What should I do?</button>
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
            <div>
                <p>{this.props.options.length}</p>
                <Option optionArray={this.props.options}/>
            </div>
        );
        
    };
};


// Child Component of Indecision #4 
class AddOption extends React.Component {
    // A special Method
    // MEHTOD: Renders everything inside this class 
    render() {
        return (
            <div>
                AddOption component here.
            </div>
        );
    }
};

// Child Component of Options #1 
class Option extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.optionArray}</p>
            </div>
        );
    }
}


ReactDOM.render(<Indecision/>, document.getElementById('app'));

