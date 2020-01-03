
// No React Components 
// let visibility = false;

// const toggleVisibility = () => {
//     visibility = !visibility;
//     render();
// };

// const render = () => {
//     const jsx = (
//         <div>
//             <h1>visibility Toggle</h1>
//             <button onClick={toggleVisibility}>
//                 {visibility ? 'Hide details' : 'Show details'}
//             </button>
//             {visibility && ( 
//                 <div>
//                     <p>Hey. These are some details you can now see!</p>
//                 </div>
//             )}
//         </div>

//     );
//     ReactDOM.render(jsx, document.getElementById('app'));

// };
// render();

// React Components 
// Class #1
class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    }
    // Method #1 - Changes 'visibility' state (boolean) to the opposite 
    handleToggleVisibility() {
        this.setState((prevState) =>{
            return{
                visibility: !prevState.visibility
            }
        });
    }
    // Method #2 - Renders all
    render() {
        return (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.handleToggleVisibility}>
                {this.state.visibility ? 'Hide details' : 'Show details'}
            </button>
            {this.state.visibility && ( 
                <div>
                    <p>Hey. These are some details you can now see!</p>
                </div>
            )}
        </div>
            
        );
    }
}
ReactDOM.render(<VisibilityToggle  />, document.getElementById('app'));