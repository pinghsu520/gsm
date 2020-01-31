import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from './materialUiComps/Button';
import ButtonBase from '@material-ui/core/ButtonBase';

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