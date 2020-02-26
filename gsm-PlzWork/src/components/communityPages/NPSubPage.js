import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '../materialUiComps/Typography';
import Container from '@material-ui/core/Container';
import {Carousel} from 'react-bootstrap';
import Footer from '../../Footer';
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
  span: {
    textAlign: 'center',
    border: '3',
  },
  img: {
    padding:10,
  }
  
}));
function Presentation() {
  const classes = useStyles(); 

  return (
    <div>
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
      >Highlights From Our Programs</Box>
    <br></br>
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
export default function CenteredGrid() {
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
      >Our Partnerships</Box>
      <br></br>
      <Grid container className={classes.photos}>
          <img className={classes.img} src="https://3.bp.blogspot.com/_-VxKllBZXP4/TR1CMAFj9tI/AAAAAAAAA_A/5bNOcaN5H54/s1600/10_GSUSA_servicemarkc.png"width="280" height="150"></img>
          <img className={classes.img} src="https://1000logos.net/wp-content/uploads/2018/04/United-Way-Logo.png" width="280" height="150"></img>
          <img className={classes.img} src="https://tano.org/wp-content/uploads/2014/12/Habitat-logo-transparent-color.png"width="290" height="150"></img>
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
      <Presentation/>
      <Footer/>
    </React.Fragment>
  );
}
