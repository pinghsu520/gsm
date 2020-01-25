
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

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
      description: ['Forms', 'Donations', 'Sponsor Tiers', 'Future Events'],
      link: 'sponsors',
      links: ['forms', 'donations', 'future_events', 'tiers'],
    },
    {
      title: 'Press',
      description: ['Contact Us', 'Stay in Touch', 'News'],
      link: 'press',
      links: ['contact_us', 'stay_in_touch', 'news'],
    },
    {
      title: 'News',
      description: ['Concerns', 'Fun Stuff', 'Be Careful'],
      link: 'news',
      links: ['concerns', 'fun', 'news', 'safety'],
    }
  ];

  function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
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
    <Box >
    <Container maxWidth="md" component="footer" className={classes.footer}>
        <Grid container spacing={5} justify="space-evenly">
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
      </Box>
      </React.Fragment>
    )};