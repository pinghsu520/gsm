import React from 'react';
import { NavLink } from 'react-router-dom';


const CommunityPage = () => (
  <div className="ui compact menu">
  <div className="ui simple dropdown item">
    Community
    <i className="dropdown icon"></i>
    <div className="menu">
      <div className="item">
          <NavLink to="/community/non_profit_representation" activeClassName="is-active">Non-Profit Representation</NavLink>
      </div>
      <div className="item">
          <NavLink to="/community/why_non_profit" activeClassName="is-active">Why Non-Profit?</NavLink>
      </div>
      <div className="item">
          <NavLink to="/community/social_impact" activeClassName="is-active">Social Impact</NavLink>
      </div>
      <div className="item">
          <NavLink to="/community/responsibility" activeClassName="is-active">Responsibility</NavLink>
      </div>
      <div className="item">
          <NavLink to="/community/board_of_directors" activeClassName="is-active">Non-Profit Board of Directors</NavLink>
      </div>
    </div>
  </div>
</div>
);

export default CommunityPage;
