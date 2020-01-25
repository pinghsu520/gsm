import React from 'react';
//import Banner  from '../componentsPingAndy/';
import Menu  from '../componentsPingAndy/Menu';
import SlideShow from '../componentsPingAndy/slideShow';
import PastSuccess from '../componentsPingAndy/pastSuccess';
import StepSuccess from '../componentsPingAndy/stepSuccess';
import PropTypes from 'prop-types';
import Dropdown from './Dropdown';
import AppBar from "@material-ui/core/AppBar";
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import ElevateScroll from "./ElevateScroll";
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
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
}));
const Home = (props) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevateScroll {...props}>
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
        <a href='/' className="ui image">
        <img className="ui small image" src="../images/GSMLogo.jpg"/>
      </a>
      
          {/* <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            Gray Slate Media
          </Typography> */}
          <nav>
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
            forms : "Forms",
            donations : "Donations",
            tiers: "Sponsor Tiers",
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
          title={"News"} 
          mainLink={"news"}
          subtitles={{
            concerns : "Concerns",
            fun : "Fun Stuff",
            saftey : "Be Careful"
          }}
        />
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Peen
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Enterprise
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Support
            </Link>
          </nav>
          <Button href="#" color="primary" variant="outlined" className={classes.link}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
      </ElevateScroll>
      <Toolbar />
      <Container>
      <div>      
        {/* <br/>
        <br/>
        <br/>
        <br/>

        <Banner /> */}

        <br/>
        <br/>
        <br/>

  		<SlideShow />

  		{/* <br/>
  		<br/>
  		<br/>
  		<br/>  

      <Menu /> */}
      <br/>
      <br/>
      <br/>
      <br/>    
    
      <PastSuccess />
      <br/>
      <br/>
      <br/>
      <br/>  
      <StepSuccess/>

      <br/>
      <br/>
      <br/>
      <br/>

    </div>
      </Container>
    </React.Fragment>
    
  );
};

export default Home;
