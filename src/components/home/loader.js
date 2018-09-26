import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Header from './Header';
import { styles } from '../../assets/css/home';

function Loader(props) {
  const { classes } = props;
  console.log("COUCOU");
  
  return (
      <div className={classes.screen}>
        <Header />
        <CircularProgress className={classes.progress} size={50} />
      </div>
  );
}

Loader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Loader);