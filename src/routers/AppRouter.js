import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import CommunityPage from '../components/communityPages/CommunityPage';
import NPRepresentationPage from '../components/communityPages/NPRepresentationPage';
import WhyNPPage from '../components/communityPages/WhyNPPage';
import BoardOfDirectorsPage from '../components/communityPages/BoardOfDirectorsPage';
import SocialImpactPage from '../components/communityPages/SocialImpactPage';
import ResponsibilityPage from '../components/communityPages/ResponsibilityPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import Community from '../componentsHamz/Community';
import Home from '../components/Home';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/community" component={Community} exact={true} />
        <Route path="/community/non_profit_representation" component={NPRepresentationPage} />
        <Route path="/community/why_non_profit" component={WhyNPPage} />
        <Route path="/community/board_of_directors" component={BoardOfDirectorsPage} />
        <Route path="/community/social_impact" component={SocialImpactPage} />
        <Route path="/community/responsibility" component={ResponsibilityPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
