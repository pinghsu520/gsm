import withRoot from '../materialUiComps/withRoot';
import React from 'react';
import Connect from '../Connect';
import Footer from '../../Footer';


function Schedule(){
  return(
    <React.Fragment>
      <Connect />
      <Footer />
    </ React.Fragment>
  )
}
export default withRoot(Schedule);
