import React from 'react';
import { NavLink } from 'react-router-dom';


const CommunityPage = () => (
    <div className="ui compact menu">
    <div className="ui simple dropdown item">
      Community
      <i className="dropdown icon"></i>
      <div className="menu">
        <div className="item">
            <NavLink to="/community/non-profit-representation" activeClassName="is-active">Non-Profit Representation</NavLink>
        </div>
        <div className="item">
            <NavLink to="/community/why-non-profit" activeClassName="is-active">Why Non-Profit?</NavLink>
        </div>
        <div className="item">
            <NavLink to="/community/social-impact" activeClassName="is-active">Social Impact</NavLink>
        </div>
        <div className="item">
            <NavLink to="/community/responsibility" activeClassName="is-active">Responsibility</NavLink>
        </div>
        <div className="item">
            <NavLink to="/community/board-of-directors" activeClassName="is-active">Non-Profit Board of Directors</NavLink>
        </div>
      </div>
    </div>
  </div>
);

export default CommunityPage;
