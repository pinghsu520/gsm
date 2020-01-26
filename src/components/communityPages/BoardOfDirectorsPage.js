import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});

export default function BoardOfDirectorsPage(){
  const classes = useStyles();
  return (

  <Box>
  <Box className={classes.root}>
  <h2 className="ui center aligned huge header">
    Board of Directors
  </h2>
  </Box>
  <Box>
  <div className="ui link cards">
  <div className="card">
    <div className="image">
      <img src="/images/tristan.jpg"/>
    </div>
    <div className="content">
      <div className="header">Tristan Farrell</div>
      <div className="meta">
        <a>Co-Founder and Software Developer</a>
      </div>
      <div className="description">
        Tristan is the GOAT
      </div>
    </div>
    <div className="extra content">
      <span className="right floated">
        Joined in 2014
      </span>
      <span>
        <i className="user icon"></i>
        151 Friends
      </span>
    </div>
  </div>
  <div className="card">
    <div className="image">
      <img src="/images/ping.jpg"/>
    </div>
    <div className="content">
      <div className="header">Ping Hsu</div>
      <div className="meta">
        <a>Co-Founder and Software Developer</a>
      </div>
      <div className="description">
        Ping is the GOAT
      </div>
    </div>
    <div className="extra content">
      <span className="right floated">
        Joined in 2014
      </span>
      <span>
        <i className="user icon"></i>
        151 Friends
      </span>
    </div>
  </div>
  <div className="card">
    <div className="image">
      <img src="/images/hamzah.jpg"/>
    </div>
    <div className="content">
      <div className="header">Hamzah Firman</div>
      <div className="meta">
        <a>Co-Founder and Software Developer</a>
      </div>
      <div className="description">
        Hamzah is the GOAT
      </div>
    </div>
    <div className="extra content">
      <span className="right floated">
        Joined in 2014
      </span>
      <span>
        <i className="user icon"></i>
        151 Friends
      </span>
    </div>
  </div>
  <div className="card">
    <div className="image">
      <img src="/images/andy.jpg"/>
    </div>
    <div className="content">
      <div className="header">Andy Le</div>
      <div className="meta">
        <a>Co-Founder and Software Developer</a>
      </div>
      <div className="description">
        Andy is the GOAT
      </div>
    </div>
    <div className="extra content">
      <span className="right floated">
        Joined in 2014
      </span>
      <span>
        <i className="user icon"></i>
        151 Friends
      </span>
    </div>
  </div>
  <div className="card">
    <div className="image">
      <img src="/images/image-2.jpg"/>
    </div>
    <div className="content">
      <div className="header">Rody Espanol</div>
      <div className="meta">
        <a>President and Co-Founder</a>
      </div>
      <div className="description">
        Rody co founder this comapny
      </div>
    </div>
    <div className="extra content">
      <span className="right floated">
        Joined in 2013
      </span>
      <span>
        <i className="user icon"></i>
        75 Friends
      </span>
    </div>
  </div>
  <div className="card">
    <div className="image">
      <img src="/images/image-1.jpg"/>
    </div>
    <div className="content">
      <div className="header">Marc Beilein</div>
      <div className="meta">
        <span className="date">Vice-President and Co-Founder</span>
      </div>
      <div className="description">
        Marc is a vice president 
      </div>
    </div>
    <div className="extra content">
      <span className="right floated">
        Joined in 2011
      </span>
      <span>
        <i className="user icon"></i>
        35 Friends
      </span>
    </div>
  </div>
</div>
</Box>
</Box>
  )};

