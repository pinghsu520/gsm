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
    <div class="container"> 

        <Banner />

  		<Menu />


        <Buttons />

      
      
      <div class="content">
                    <Background />
      </div>

  		
      <div class="content">
                    <SlideShow />
      </div>

    
      <div class="content">
                    <WhatWeDo />
      </div>
      
  
    
   
      <div class="content">
                   <PastSuccess />
      </div>
    
    
   
      <div class="content">
                  <StepSuccess />
      </div>
    

    
      

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
