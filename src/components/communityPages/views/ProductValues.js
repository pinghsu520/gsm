import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '../../materialUiComps/Typography';

const styles = theme => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: theme.palette.secondary.light,
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(30),
    display: 'flex',
    position: 'relative',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  image: {
    height: 55,
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
  },
});

function ProductValues(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        {/* <img
          src="/static/themes/onepirate/productCurvyLines.png"
          className={classes.curvyLines}
          alt="curvy lines"
        /> */}
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              {/* <img
                className={classes.image}
                src="/static/themes/onepirate/productValues1.svg"
                alt="suitcase"
              /> */}
              <Typography variant="h6" className={classes.title}>
                Improve the Community
              </Typography>
              <Typography variant="h5">
                {'One event at a time,'}
                {'our growth will directly stimulate communities '}
                {'across the country and the world!'}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              {/* <img
                className={classes.image}
                src="/static/themes/onepirate/productValues2.svg"
                alt="graph"
              /> */}
              <Typography variant="h6" className={classes.title}>
                We Can't Do it Alone
              </Typography>
              <Typography variant="h5">
                {'Everything we do for the community would be impossible without the amazing sponsors.'}
                {' Contact us to learn more about our efforts and how you can help us in building a future for all.'}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              {/* <img
                className={classes.image}
                src="/static/themes/onepirate/productValues3.svg"
                alt="clock"
              /> */}
              <Typography variant="h6" className={classes.title}>
                Assist Your Fundraisers
              </Typography>
              <Typography variant="h5">
                {'We go the extra mile to support your fundraisers and the amazing causes that they support!'}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductValues);