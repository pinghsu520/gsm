import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '../materialUiComps/Button';
import Typography from '../materialUiComps/Typography';
import ProductHeroLayout from '../sponsorPages/views/ProductHeroLayout';
import NPSubPage from "./NPSubPage";
const backgroundImage =
  'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60';

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
    <img  style={{ display: 'none' }} src={backgroundImage} alt="increase priority" height='2000' />
    <Typography color="inherit" align="center" variant="h1" marked="center">
      Non Profits
    </Typography>
    <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
      Become a Sponsor Today
    </Typography>
  </ProductHeroLayout>
  <NPSubPage/>
  </React.Fragment>

  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);

