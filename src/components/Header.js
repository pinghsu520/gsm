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
    <Dropdown 
      title={"Ccommunity"} 
      mainLink={"community"}
      subtitles={{
        non_profit_representation : "Non-Profit Representation",
        why_non_profit : "Why Non-Profit?",
        board_of_directors : "Non-Profit Board of Directors",
        social_impact : "Social Impact",
        responsibility : "Responsibility"
      }}
    />
    <Dropdown 
      title={"Events"} 
      mainLink={"events"}
      subtitles={{
        upcoming : "Upcoming",
        schedule_meeting : "Schedule Meeting",
        sponsorship_form : "Sponsorship Form",
        contact : "Contact",
        sponsorship_tiers : "Sponsorship Tiers"
      }}
    />
    <Dropdown 
      title={"Sponsors & Forms"} 
      mainLink={"sponsors"}
      subtitles={{
        forms : "Forms",
        donations : "Donations",
        future_events : "Future Events"
      }}
    />
    <Dropdown 
      title={"Press HQ"} 
      mainLink={"press"}
      subtitles={{
        contact_us : "Contact Us",
        stay_in_touch : "Stay in Touch",
      }}
    />
    <Dropdown 
      title={"e-News"} 
      mainLink={"news"}
      subtitles={{
        contact_us : "News",
        stay_in_touch : "Concerns",
        fun : "Fun Stuff",
        saftey : "Be Careful"
      }}
    />
  </header>
);

export default Header;
