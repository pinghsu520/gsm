import React from 'react';
import Banner  from './components/';
import Menu  from './components/Menu';
import SlideShow from './components/slideShow';
import PastSuccess from './components/pastSuccess';
import StepSuccess from './components/stepSuccess';
import WhatWeDo from './components/whatWeDo';
import Buttons from './components/buttons';
import Background from './components/cardbackground';
import ScrollWheel from './components/scrollSnap/scrollWheel'

import './components/scrollSnap/scrollSnap.css';


const App = () => {
  return (
    <div>     

        <Banner />

  		<Menu />


        <Buttons />

      <section class="test">
            <Background />
      </section>
      

  		


      <section class="test">
            <SlideShow />
      </section>
      
      
  
    
      <section class="test">
            <WhatWeDo />
      </section>
      
    
    
      <section class="test">
           <PastSuccess />
      </section>
    
    

      <section class="test">
           <StepSuccess />
      </section>
      

      <br/>
      <br/>
      <br/>
      <br/>

     


      <br/>
      <br/>
      <br/>
      <br/>


    </div>
  );
};

export default App;
