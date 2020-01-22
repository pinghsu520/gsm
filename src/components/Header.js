import React from 'react';
import { NavLink } from 'react-router-dom';
import Dropdown from './communityPages/Dropdown';



const Header = () => (
  <header>
    <h1 class="ui center aligned header grey">
      <a href='/' className="ui image">
        <img className="ui image" src="../images/GSMLogo.jpg"/>
      </a>
      <div class="content">
        Gray Slate Media
        <div class="sub header">A Company with a Heart</div>
      </div>
    </h1>

    {/* <div class="ui clearing segment">
      
    
    <h3 class="ui left floated header grey"> */}
      {/* <a href='/' className="ui image">
        <img className="ui image" src="../images/GSMLogo.jpg"/>
      </a>
      <div class="content">
        Gray Slate Media
        <div class="sub header">A Company with a Heart</div>
      </div> */}
      {/* </h3> */}
      <div className="ui compact menu">
        <div className="ui simple dropdown item">
          <NavLink to='/' activeClassName="is-active">Home</NavLink>
          <div className="menu">
          </div>
        </div>
      </div>
      <Dropdown 
        title={"Community"} 
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
    
    {/* </div> */}
  </header>
);

export default Header;
