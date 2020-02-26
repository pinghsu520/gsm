import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { NavLink } from 'react-router-dom';
import '../App.css';
import Footer from '../Footer';



const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  cardTitles: {

  }
}));

const cards = [1, 2, 3];

export default function AboutUs() {
  const classes = useStyles();
  const titles = ["Social Impact", "Commitment", "Non-Profit"]
  const info = [
    "Gray Slate works closely with the community.",
    "Gray Slate is committed to supporting the next generation of do-ers.",
    "Gray Slate is focused on making tommorow better than today."
  ]
  const links = ["/community/social_impact", "/community/responsibility", "/community/why_non_profit"]
  const images = [
    "https://images.unsplash.com/photo-1532929527964-ed3e9a108366?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    "https://images.unsplash.com/photo-1507097672537-2b0effc54687?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=655&q=80",
    "https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
  ]
  return (
    <React.Fragment>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="white" gutterBottom>
              Gray Slate... Who?
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              We are a startup running out of Tucson and Pheonix, Arizona. We are comprised of
              two divisions; Gray Slate Media and Gray Slate Technology.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary" >
                    <NavLink to="/community/board_of_directors" activeClassName="active" 
                    style={{ 
                      color: "white",
                      fontSize: 14 
                    }}>
                     Board of Directors
                    </NavLink>
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary" >
                  <NavLink to="/sponsors" activeClassName="active" 
                    style={{ 
                      color: "black",
                      fontSize: 12 
                    }}>
                     Sponsor Us
                    </NavLink>
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card, index) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={images[card-1]}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h3" component="h2">
                      {titles[card-1]}
                    </Typography>
                    <Typography variant="h5">
                      {info[card-1]}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button href={links[card-1]} size="medium" color="primary">
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <Footer/>
    </React.Fragment>
  );
}