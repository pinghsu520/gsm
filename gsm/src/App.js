import React from 'react';
import Banner  from './components/';
import Menu  from './components/Menu';
import SlideShow from './components/slideShow';
import PastSuccess from './components/pastSuccess';
import StepSuccess from './components/stepSuccess';
import WhatWeDo from './components/whatWeDo';
import Buttons from './components/buttons';
import Background from './components/cardbackground';


const App = () => {
  return (
    <div>     
        <br/>
        <br/>
        <br/>
        <br/>

        <Banner />

        <br/>
        <br/>
        <br/>

  		<Menu />
        <Buttons />
  		<br/>
  		<br/>
  		<br/>
  		<br/> 
  		<Background />

      <SlideShow />
      <br/>
      <br/>
      <br/>
      <br/>    
    
      <WhatWeDo />
      <br/>
      <br/>
      <br/>
      <br/>    
    
      <PastSuccess />
      <br/>
      <br/>
      <br/>
      <br/>  
      <StepSuccess />

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
