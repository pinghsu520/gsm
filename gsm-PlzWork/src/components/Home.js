import React from 'react';
import Menu  from './PingAndy/Menu';
import SlideShow from './PingAndy/slideShow';
import PastSuccess from './PingAndy/pastSuccess';
import StepSuccess from './PingAndy/stepSuccess';
import PanelOne from './PingAndy/panelOne';
import PanelTwo from './PingAndy/panelTwo';
import PanelThree from './PingAndy/panelThree';
import PanelFour from './PingAndy/panelFour';
import '../App.css';



const Home = () => (
    <div className='App'>      

        <div className="page green" key="red">
     <SlideShow />
     </div>
        <PanelOne />
        <PanelTwo />
        <PanelThree />
        <PanelFour />
    </div>
);

export default Home;

// import React, { Component } from 'react';
// import ReactSnapScroll from 'react-snap-scroll';
// import Menu  from './master/Menu';
// import SlideShow from './master/slideShow';
// import PastSuccess from './master/pastSuccess';
// import StepSuccess from './master/stepSuccess';
// import WhatWeDo from './master/whatWeDo';
// import Buttons from './master/buttons';
// import BootMenu from './master/BootMenu';
// import Result from './master/results';
// import '../index.css';
// import '../App.css'


// const children = [
//     <div className="slideShow red" key="red">
//     <SlideShow />
//     </div>,


//     <div className="page results" key="results">
//         <PastSuccess />
//     </div>,


//     <div className="page whatWedo" key="whatWedo">
//         <WhatWeDo />
//     </div>,

//     <div className="page results" key="results">
//         <Result />
//     </div>,
//     <div className="page whatWedo" key="whatWedo">
//         <h2><span>Snap</span><span>Scroll</span></h2>
//     </div>,
//     <div className="page results" key="results">
//         <h2><span>Snap</span><span>Scroll</span></h2>
//     </div>,
// ];

// class HomePage extends React.Component{

//     state = {
//         transition: 'move-top-bottom',
//         index: 0,
//     }

//     transitionChanged = e => {
//         this.setState({ [e.target.name]: e.target.value });
//     }

//     indexChanged = index => {
//         this.setState({ index });
//     }
    
//     render() {

//         const { transition, index } = this.state;

//         return (
//             <div className="App">
//                 <ReactSnapScroll
//                     transition={ transition }
//                     indexChanged={ this.indexChanged }
//                 >
//                     { children.map(child => child) }
//                 </ReactSnapScroll>
                
//                 <div className="pagination">
//                     { index + 1 } / { children.length }
//                 </div>
//             </div>
//         );

//     }
//   }


// export default function Home(){
//   console.log("working")
//   return(
//     <HomePage/>
    
//   )
// };

// // import React from 'react';
// // import Menu  from './PingAndy/Menu';
// // import SlideShow from './PingAndy/slideShow';
// // import PastSuccess from './PingAndy/pastSuccess';
// // import StepSuccess from './PingAndy/stepSuccess';


// // const Home = () => (
// //     <div>      
       
// //         <br/>
// //         <br/>
// //         <br/>

// //   		<SlideShow />

  		
// //       <br/>
// //       <br/>
// //       <br/>
// //       <br/>    
    
// //       <PastSuccess />
// //       <br/>
// //       <br/>
// //       <br/>
// //       <br/>  
// //       <StepSuccess/>

// //       <br/>
// //       <br/>
// //       <br/>
// //       <br/>

// //     </div>
// // );

// // export default Home;
