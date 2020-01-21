import React from 'react';
import Banner  from './components/';
import Menu  from './components/Menu';
import SlideShow from './components/slideShow';
import PastSuccess from './components/pastSuccess'
import StepSuccess from './components/stepSuccess'

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

  		<SlideShow />

  		<br/>
  		<br/>
  		<br/>
  		<br/>  

      <Menu />
      <br/>
      <br/>
      <br/>
      <br/>    
    
      <PastSuccess />
      <br/>
      <br/>
      <br/>
      <br/>  
      <StepSuccess/>

      <br/>
      <br/>
      <br/>
      <br/>

    </div>
  );
};

export default App;
