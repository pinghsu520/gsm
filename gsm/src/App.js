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
import 'scrollify.js';

const App = () => {
  return (


    
    <div>

      <script>
        $(function() {
          $.scrollify({
            section : ".example-classname",
          });
        });
      </script>
 


    <body>
      <div class="example-classname">
      	<WhatWeDo />
      </div>
      	      
      <div class="example-classname">

       <PastSuccess />
      </div>
    </body>
    
      

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
