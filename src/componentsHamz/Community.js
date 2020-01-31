import React, { Suspense } from 'react';
import SubPages from './SubPages';
import ConnectWithUs from './Sub-ConnectForm';
import './Community.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '../components/materialUiComps/Button';
import Typography from '../components/materialUiComps/Typography';
import ProductHeroLayout from '../components/sponsorPages/views/ProductHeroLayout';
import Footer from '../Footer';


const backgroundImage =
  'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80';

const styles = theme => ({
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
});

function ProductHero(props) {
  const { classes } = props;

  return (
    <React.Fragment>
    <ProductHeroLayout backgroundClassName={classes.background}>
    {/* Increase the network loading priority of the background image. */}
    <img style={{ display: 'none' }} src={backgroundImage} alt="increase priority" />
    <Typography color="inherit" align="center" variant="h1" marked="center">
      Community
    </Typography>
    <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
      Become a Sponsor Today
    </Typography>
  </ProductHeroLayout>
  <SubPages/>
  <Footer />
  </React.Fragment>

  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);

// class Community extends React.Component {
  
//     render() {
//         return (
//                 <div>
//                 <SubPages />

//                 </div>  
                
//         )
//     }
// };

// export default Community;

