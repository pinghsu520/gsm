import React, { Component } from 'react';
import ReactSnapScroll from 'react-snap-scroll';
import './App.css';
import Menu  from './components/Menu';
import SlideShow from './components/slideShow';
import Buisness from './components/buisness';
import StepSuccess from './components/stepSuccess';
import NonProfit from './components/nonProfit';
import Buttons from './components/buttons';
import BootMenu from './components/BootMenu';
import './index.css';
import Education from './components/education';
import OurStory from './components/ourStory';



// test

const children = [
    <div className="Slideshow red" key="red">
        <SlideShow />
    </div>,


    <div className="page2 pastsuccess" key="pastsuccess">
        <Buisness />
    </div>,


    <div className="page3 whatWedo" key="whatWedo">
        <NonProfit />
    </div>,

    <div className="page4 results" key="results">
        <Education />
    </div>,

    <div className="page5 ourStory" key="ourStory">
        <OurStory />
    </div>,
    <div className="page6 purple" key="purple">
        <StepSuccess />
    </div>,
];

class App extends Component {

    state = {
        transition: 'move-top-bottom',
        index: 0,
    }

    transitionChanged = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    indexChanged = index => {
        this.setState({ index });
    }

    render() {
      
        const { transition, index } = this.state;

        return (
      
            <div className="App">
            <BootMenu />
                <ReactSnapScroll
                    transition={ transition }
                    indexChanged={ this.indexChanged }
                >
                    { children.map(child => child) }
                </ReactSnapScroll>
                {/*<div className="controls">
                    <form>
                        <h3>Transition</h3>
                        <select onChange={ this.transitionChanged } name="transition">
                            <option value="move-top-bottom">Move To Top / From Bottom</option>
                            <option value="move-top-bottom-stagger">Move To Top Stagger / From Bottom</option>
                            <option value="scale-down-top-bottom">Scale Down / From Bottom</option>
                            <option value="scale-down-up">Scale Down / Scale Up</option>
                            <option value="fold-top-bottom">Fold Top / From Bottom</option>
                            <option value="cube-top-bottom">Cube Top / From Bottom</option>
                        </select>
                    </form>
                </div>*/}
                <div className="pagination">
                    { index + 1 } / { children.length }
                </div>
            </div>
        );

    }

}

export default App;
