import React, { Suspense } from 'react';
import SubPages from './SubPages';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '../materialUiComps/Button';
import Typography from '../materialUiComps/Typography';
import ProductHeroLayout from '../sponsorPages/views/ProductHeroLayout';
import EventCategories from './EventCategories';

const backgroundImage =
  'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80';

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
      Event
    </Typography>
    <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
      This is our event page
    </Typography>
  </ProductHeroLayout>
  <EventCategories/>
  <SubPages/>

  </React.Fragment>

  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(ProductHero);

// import React, { Suspense } from 'react';
// import SubPages from './SubPages';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Button from '../materialUiComps/Button';
// import Typography from '../materialUiComps/Typography';
// import ProductHeroLayout from '../sponsorPages/views/ProductHeroLayout';
// import Footer from '../../Footer';

// const backgroundImage =
//   'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80';

// const styles = theme => ({
//   background: {
//     backgroundImage: `url(${backgroundImage})`,
//     backgroundColor: '#7fc7d9', // Average color of the background image.
//     backgroundPosition: 'center',
//   },
//   button: {
//     minWidth: 200,
//   },
//   h5: {
//     marginBottom: theme.spacing(4),
//     marginTop: theme.spacing(4),
//     [theme.breakpoints.up('sm')]: {
//       marginTop: theme.spacing(10),
//     },
//   },
//   more: {
//     marginTop: theme.spacing(2),
//   },
// });

// function ProductHero(props) {
//   const { classes } = props;

//   return (
//     <React.Fragment>
//     <ProductHeroLayout backgroundClassName={classes.background}>
//     {/* Increase the network loading priority of the background image. */}
//     <img style={{ display: 'none' }} src={backgroundImage} alt="increase priority" />
//     <Typography color="inherit" align="center" variant="h1" marked="center">
//       Event
//     </Typography>
//     <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
//       This is our event page
//     </Typography>
//   </ProductHeroLayout>
//   <SubPages/>
//   <Footer />
//   </React.Fragment>

//   );
// }

// ProductHero.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(ProductHero);
