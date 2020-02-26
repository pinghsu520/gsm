import withRoot from '../materialUiComps/withRoot';
import React from 'react';
import ProductValues from './schedulePage/ProductValues';
import ProductHero from './schedulePage/ProductHero';
import Footer from '../../Footer';


function Schedule(){
  return(
    <React.Fragment>
      <ProductHero />
      {/* <ProductValues /> */}
      <Footer />
    </ React.Fragment>
  )
}
export default withRoot(Schedule);
