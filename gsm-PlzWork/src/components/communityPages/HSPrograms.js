import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Container from '@material-ui/core/Container';
import Typography from '../materialUiComps/Typography';

const styles = theme => ({
  root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
  },
  images: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexWrap: 'wrap',
  },
  imageWrapper: {
    position: 'relative',
    display: 'block',
    padding: 200,
    borderRadius: 0,
    height: '40vh',
    padding: theme.spacing(2),
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
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
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
});

// const links = {
//     urls: ["https://www.google.com/"],urls: ["https://www.piazza.com/"],
// };

function EventCategories(props) {

  const { classes } = props;

  const images = [
    {
      url:
        'https://images.unsplash.com/photo-1572390598391-e238d1e93583?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
      title: 'AFTER SCHOOL PROGRAM',
      width: '500%',
      href:'/events/trade_show',

    },
    {

      url:
        'https://images.unsplash.com/photo-1528489290689-444dece355b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=60',
      title: 'CAMPUS CLEANING',
      width: '500%',
      href:'/events/music_concert',
    },
    {
      url:
        'https://images.unsplash.com/photo-1512173397-1d1d99d5bcef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=60',
      title: 'COLLEGE 101',
      width: '500%',
      href: '/events/polar_dive',
    },
    {
      url:
        'https://images.unsplash.com/photo-1560073743-0a45c01b68c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=60',
      title: 'VOLUNTEERS',
      width: '500%',
      href:'/events/dog_jog',
    },
]; 

// subtitles={{
//   contact_us : "Contact Us",
//   stay_in_touch : "Stay in Touch",
// }}

  return (
    <Container className={classes.root} component="section">
      <div className={classes.images}>
        {images.map(image => (
            
          <ButtonBase
            key={image.title}
            className={classes.imageWrapper}
            href={image.href}
            style={{
              width: image.width,
            }}
          >
            <div
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
            <div className={classes.imageBackdrop} />
            <div className={classes.imageButton}>
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
                <div className={classes.imageMarked} />
              </Typography>
            </div>
          </ButtonBase>
        ))}
      </div>
    </Container>
  );
}

EventCategories.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EventCategories);