class Counter extends React.Component {
    constructor(props) {
        super(props);
        // binds each method to 'this' instance 
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        // Default state object
        this.state = {
           count: 0
        };
        
        
    }
    // Method #1: Adds 1 to the count 
    handleAddOne() {
        // 'this.setState' helps to manipulate a state object 
        // Also, 'prevState' argument holds the previos a state value(s)
        // that has/have been updated
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        }); 
    };
    // Method #2: Substracts 1 from the count 
    handleMinusOne() {
        // Has been explained up in the 'handleaddOne' function
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        }); 
        
    };
    // Method #3: Resets count to 0 
    handleReset() {
        // Has been explained up in the 'handleaddOne' function
        this.setState((prevState) => {
            return {
                count: 0
            }
        }); 
    };
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>        
                <button onClick={this.handleReset}>reset</button>        
            </div>
        );
    }
};

ReactDOM.render(<Counter />, document.getElementById('app'));
// -----------|||--------------//
// BEFORE React Components 
// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp();
// };
// const minusOne = () => {
//     count--;
//     renderCounterApp();
// };
// const reset = () => {
//     count= 0;
//     renderCounterApp();
// };

// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>  
//             <button onClick={minusOne}>-1</button>        
//             <button onClick={reset}>reset</button>              
//         </div>
//     );

//     ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();

