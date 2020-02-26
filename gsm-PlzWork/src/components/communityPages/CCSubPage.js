import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '../materialUiComps/Typography';
import Container from '@material-ui/core/Container';
import {Carousel} from 'react-bootstrap';
import Footer from '../../Footer';
import CCPrograms from './CCPrograms';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  img: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  photos: {
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    color: 'gray',
  },
  description: {
    padding: 20,
    color: 'white',
    backgroundColor:'gray',
    

  },
  h1: {
    textAlign: 'center',
    backgroundColor: 'gray',
  },
  img: {
    padding:10,
  }
  
}));
function SlideShows() {
  return (
    <div>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1485768071412-bded21c2be08?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=60"
          alt="First slide"
          width="500" height="500"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1560073743-0a45c01b68c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=60"
          alt="Third slide"
          width="500" height="500"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1528489290689-444dece355b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=60"
          alt="Third slide"
          width="500" height="500"
        />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>

  )
};
export default function HSSubPage() {
  const classes = useStyles();

  return (
    <React.Fragment>
    <br></br>
    <Box
    color="white"
    textAlign="center"
    fontFamily="Monospace"
    boxShadow={3}
    bgcolor="black"
    m={1}
    p={1}
    style={{ width: '29rem', height: '5rem', margin: 'auto',}}
      >Tucson Local High Schools</Box>
      <br></br>
      <Grid container className={classes.photos}>
          <img className={classes.img} src="https://www.jaaz.org/wp-content/uploads/2017/02/pcc.gif" width="350" height="80"></img>
          <img className={classes.img} src="https://lh3.googleusercontent.com/proxy/YYrVgve03B9V5s0L0ijHxuvWN4Dk1bjz4L2bKjh7p2WjXMdnk4VigdBSABb1bbqaT87qaAvABmH0yc810SB0MFE5oTZG9C0k7Ok_La_9jhwgYXth" width="200" height="180"></img>
          <img className={classes.img} src="https://www.nicepng.com/png/full/227-2274987_glendale-community-college-logo-png-transparent-community-college.png" width="280" height="110"></img>
      </Grid>
      <br></br>
      <Grid container>
        <Grid item sm className={classes.description}>
          <Paper className={classes.title}> Our Vision </Paper>
          <br></br>
          <Container>Tieri na reno voti eto tocecik si cewi. Ti turieler mura biedakus. Ofumufe rev ehe codetien tileci utone tir 
          isodara pan. Ye enacelon icim sani nuroran la idis idodief: Uviebi dieyucet na aro afu gesikay, pi iesele laso icecel rerit 
          lom tap ucasoral, terar piloh betac. Rayiheg fetic siret hud rilodet sures wotiquh. Mine atelitim iqagi rini ce soho tili
           renoma uriete; </Container>
        </Grid>
        <Grid item sm className={classes.description}>
          <Paper className={classes.title}> Our Mission </Paper>
          <br></br>
          <Container>Tieri na reno voti eto tocecik si cewi. Ti turieler mura biedakus. Ofumufe rev ehe codetien tileci utone tir 
          isodara pan. Ye enacelon icim sani nuroran la idis idodief: Uviebi dieyucet na aro afu gesikay, pi iesele laso icecel rerit 
          lom tap ucasoral, terar piloh betac. Rayiheg fetic siret hud rilodet sures wotiquh. Mine atelitim iqagi rini ce soho tili
          renoma uriete; </Container>
      </Grid>
      <Grid item sm className={classes.description}>
          <Paper className={classes.title}> Our Programs </Paper>
          <br></br>
          <Container>Tieri na reno voti eto tocecik si cewi. Ti turieler mura biedakus. Ofumufe rev ehe codetien tileci utone tir 
          isodara pan. Ye enacelon icim sani nuroran la idis idodief: Uviebi dieyucet na aro afu gesikay, pi iesele laso icecel rerit 
          lom tap ucasoral, terar piloh betac. Rayiheg fetic siret hud rilodet sures wotiquh. Mine atelitim iqagi rini ce soho tili
          renoma uriete; </Container>    
    </Grid>
      </Grid>
      <br></br>
      <Box
      color="white"
      textAlign="center"
      fontFamily="Monospace"
      boxShadow={3}
      bgcolor="black"
      m={1}
      p={1}
      style={{ width: '29rem', height: '5rem', margin: 'auto',}}
        >Our Programs</Box>
      <CCPrograms/>
      <Box
      color="white"
      textAlign="center"
      fontFamily="Monospace"
      boxShadow={3}
      bgcolor="black"
      m={1}
      p={1}
      style={{ width: '29rem', height: '5rem', margin: 'auto',}}
      >Highlights From Our Programs</Box>
      <br></br>
      <SlideShows/>
      <Footer/>
    </React.Fragment>
  );
}

