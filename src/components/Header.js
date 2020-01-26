
import React from 'react';
import { NavLink } from 'react-router-dom';
import Dropdown from './Dropdown';
import AppBar from "@material-ui/core/AppBar";
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search'
import MoreIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles(theme => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
    },
    li: {
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[700] : theme.palette.grey[200],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
}));
export default function Header(props){
  const classes = useStyles();
  return (
    // <ElevateScroll {...props}>
      // <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
      <Box >
        <Toolbar className={classes.toolbar}>
          <a href='/' className="ui image">
            <img className="ui small image" src="../images/GSMLogo.jpg"/>
          </a>
      
          {/* <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            Gray Slate Media
          </Typography> */}
          <nav>
          <div className="ui compact menu">
        <div className="ui simple dropdown item">
          <NavLink to='/about_us' activeClassName="is-active">About Us</NavLink>
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
              schedule : "Schedule Meeting",
              contact : "Contact"
            }}
          />
          <Dropdown 
            title={"Sponsors & Forms"} 
            mainLink={"sponsors"}
            subtitles={{
              tiers: "Sponsor Tiers",
            }}
          />
          <Dropdown 
            title={"Press HQ"} 
            mainLink={"press"}
            subtitles={{
            }}
          />
          </nav>
          {/* <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <Button href="#" color="primary" variant="outlined" className={classes.link}>
            Login
          </Button>
          <IconButton aria-label="display more actions" edge="end" color="inherit">
            <MoreIcon />
          </IconButton> */}
        </Toolbar>
        </Box>
      // </AppBar>
      //  </ElevateScroll>
  )}
/* const Header = () => (
  <header>
    <h1 className="ui center aligned header grey">
      <a href='/' className="ui image">
        <img className="ui image" src="../images/GSMLogo.jpg"/>
      </a>
      <div className="content">
        Gray Slate Media
        <div className="sub header">A Company with a Heart</div>
      </div>
    </h1>

    
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
    
  </header>
);

export default Header; */