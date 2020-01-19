import React from 'react';
import { NavLink } from 'react-router-dom';
import CommunityPage from './communityPages/CommunityPage';
import Dropdown from './communityPages/Dropdown';


const Header = () => (
  <header>
    <h1 className="ui center aligned icon header grey">
      <a href='/' className="ui image">
        <img className="ui image" src="../images/GSMLogo.jpg"/>
      </a>
      <div className="content"></div>
      Gray Slate Media
    </h1>
    <CommunityPage />
    <Dropdown 
      title={"Poop"} 
      mainLink={"community"}
      subtitles={{
        non_profit_representation : "1Non-Profit Representation",
        why_non_profit : "2Why Non-Profit?",
        board_of_directors : "5Non-Profit Board of Directors",
        social_impact : "3Social Impact",
        responsibility : "4Responsibility"
      }}
    />
    <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
    <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
    <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    <NavLink to="/community" activeClassName="is-active">Community</NavLink>
  </header>
);

export default Header;
