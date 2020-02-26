import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
// import Button from './materialUiComps/Button';
import ButtonBase from '@material-ui/core/ButtonBase';


// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import ProductHeroLayout from '../components/sponsorPages/views/ProductHeroLayout';


const backgroundImage =
'https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400&q=80';
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
  imageWrapper: {
    position: 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    height: '50vh',
    [theme.breakpoints.down('sm')]: {
      width: '100% !important',
      height: 100,
    },
    '&:hover': {
      zIndex: 1,
    },
    '&:hover $imageBackdrop': {
      opacity: 0.15,
    },
    '&:hover $imageMarked': {
      opacity: 0,
    },
    '&:hover $imageTitle': {
      border: '4px solid currentColor',
    },
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
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
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
}));
const footers = [
    /* {
      title: 'Company',
      description: ['Team', 'History', 'Contact us', 'Locations'],
    }, */
    {
      title: 'Community',
      description: ['Non-Profit', 'Board of Directors', 'Social Impact', 'Responcibility'],
      link: 'community',
      links: ['non_profit_representation', 'why_non_profit', 'board_of_directors', 'social_impact','responcibility'],
    },
    {
      title: 'Events',
      description: ['Upcoming', 'Schedule Meeting', 'Contact'],
      link: 'events',
      links: ['upcoming', 'schedule', 'contact'],
    },
    {
      title: 'Sponsors',
      description: ['Sponsor Tiers'],
      link: 'sponsors',
      links: ['tiers'],
    },
    {
      title: 'Press',
      description: ['Contact Us'],
      link: 'press',
      links: ['press'],
    },
    /* {
      title: 'News',
      description: ['Concerns', 'Fun Stuff', 'Be Careful'],
      link: 'news',
      links: ['concerns', 'fun', 'news', 'safety'],
    } */
  ];

  function Copyright() {
    return (
      <Typography variant="body2" color="textPrimary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://grayslate-test.firebaseapp.com/">
          Gray Slate
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  export default function Footer(){
    const classes = useStyles();
    const count = 0;
    return (
    <React.Fragment>
    <Container maxWidth="md" component="footer" className={classes.footer}>
        <Grid container spacing={4} justify="space-evenly">
          {footers.map(footer => (
            <Grid item xs={6} sm={2} key={footer.title}>
              <NavLink 
                to={'/'+footer.link} 
                activeClassName="is-active" 
                variant="h6" 
                color="textPrimary"
                style={{ 
                  color: "black",
                  fontSize: 14 
                }}
                activeStyle={{
                  fontWeight: "bold",
                  color: "black"
                }}
              >
                {footer.title}
              </NavLink>
              
              <ul>
              
                {footer.description.map((item, index) => (
                  <li key={item}>
                    <NavLink 
                      to={'/'+footer.link +'/'+footer.links[index]}
                      activeClassName="is-active"                       
                      style={{ 
                        color: 'grey',
                        fontSize: 10 
                      }}
                      activeStyle={{
                        fontWeight: "bold",
                        color: "black"
                      }}
                    >
                      {item}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
        
      </Container>
     
      </React.Fragment>
    )};