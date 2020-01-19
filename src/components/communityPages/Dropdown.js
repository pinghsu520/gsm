import React from 'react';
import { NavLink } from 'react-router-dom';


class Dropdown extends React.Component {
  render() {
  const items = []
  console.log(this.props.subtitles);
  for(const key in this.props.subtitles){
    console.log(key);
    items.push(
      <div key={key} className="item">
          <NavLink to={"/"+this.props.mainLink+"/"+key} activeClassName="is-active">
            {this.props.subtitles[key]}
          </NavLink>
      </div>
    )
  }
  return(
  <div className="ui compact menu">
  <div className="ui simple dropdown item">
    {this.props.title}
    <i className="dropdown icon"></i>
    <div className="menu">
      {items}
    </div>
  </div>
</div>
)};
}
export default Dropdown;
