import withRoot from '../materialUiComps/withRoot';
// --- Post bootstrap -----
import React from 'react';
import ProductHero from './views/ProductHero';
import ProductValues from './views/ProductValues';

function PressPage() {
  return (
    <React.Fragment>
      {/* <AppAppBar /> */}
      <ProductHero />
      <ProductValues />
      {/* <ProductCategories /> */}
      {/* <ProductHowItWorks /> */}
      {/* <ProductCTA /> */}
      {/* <ProductSmokingHero /> */}
      {/* <AppFooter /> */}
    </React.Fragment>
  );
}

export default withRoot(PressPage);