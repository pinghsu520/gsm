import React from 'react';
import { NavLink } from 'react-router-dom';
import Dropdown from './Dropdown';



const Header = () => (
  <div class="ui menu">    
    <div class="ui horizontal segments">
      <div class="ui very padded grey segment">
        <h1 className="ui center aligned header grey">
          <a href='/' className="ui image">
            <img className="ui image" src="../images/GSMLogo.jpg"/>
          </a>
          <div className="content">
            Gray Slate Media
            <div className="sub header">A Company with a Heart</div>
          </div>
          
        </h1>
      </div>
      <div class="ui very padded red segment">
        <div className="ui compact  menu">
          <div className="ui simple dropdown item">
            <NavLink to='/' activeClassName="is-active">Home</NavLink>
          </div>
        </div>
      </div>
      <div class="ui very padded yellow segment">
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
      </div>
      <div class="ui very padded green segment">
        <Dropdown 
          title={"Events"} 
          mainLink={"events"}
          subtitles={{
            upcoming : "Upcoming",
            schedule : "Schedule Meeting",
            contact : "Contact"
          }}
        />
      </div>
      <div class="ui very padded blue segment">
        <Dropdown 
          title={"Sponsors & Forms"} 
          mainLink={"sponsors"}
          subtitles={{
            forms : "Forms",
            donations : "Donations",
            future_events : "Future Events"
          }}
        />
      </div>
      <div class="ui very padded purple segment">
        <Dropdown 
          title={"Press HQ"} 
          mainLink={"press"}
          subtitles={{
            contact_us : "Contact Us",
            stay_in_touch : "Stay in Touch",
          }}
        />
      </div>
      <div class="ui very padded pink segment">
        <Dropdown 
          title={"News"} 
          mainLink={"news"}
          subtitles={{
            concerns : "Concerns",
            fun : "Fun Stuff",
            saftey : "Be Careful"
          }}
        />
      </div>
    </div>
  </div>
);

export default Header;
