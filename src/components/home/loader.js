import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Header from './Header';

const styles = theme => ({
  progress: {
    maxWidth: "50%"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  screen: {
      width: "100vw",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
  }
});

function Loader(props) {
  const { classes } = props;
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