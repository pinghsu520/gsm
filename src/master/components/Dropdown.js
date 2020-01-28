import React from 'react';
import { NavLink } from 'react-router-dom';

class Dropdown extends React.Component {
  render() {
  const items = []
  for(const key in this.props.subtitles){
    items.push(
      <div key={key} className="item">
          <NavLink to={"/"+this.props.mainLink+"/"+key} activeClassName="is-active">
            {this.props.subtitles[key]}
          </NavLink>
      </div>
    )
  }
  return(
  

  <div className="ui compact  menu">
    <div className="ui simple dropdown item">
      
      <NavLink to={'/'+this.props.mainLink} activeClassName="is-active">{this.props.title}</NavLink>
      <i className="dropdown icon"></i>
      <div className=" menu">
        {items}
      </div>
    </div>
  </div>
)};
}
export default Dropdown;