import React from 'react';
import Navbar from './components/Navbar'
import Community from './components/Community';
import NonProfitRepresentation from './components/Sub-NonProfitRepresentation';
import WhyThisNonProfit from './components/Sub-WhyThisNonProfit';
import GoodTheyAreDoing from './components/Sub-GoodTheyAreDoing';
import SocialImpact from './components/Sub-SocialImpact';
import BoardOfDirectors from './components/Sub-BoardOfDirectors'

const App = () => {
  return (
    <div>
      <Navbar />
      <Community />
      <NonProfitRepresentation />
      <WhyThisNonProfit />
      <GoodTheyAreDoing />
      <SocialImpact />
      <BoardOfDirectors />
    </div>
  );
};
export default App;
