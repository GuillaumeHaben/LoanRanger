import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Header from './home/Header';
import { Route } from 'react-router-dom';
import { Sidebar } from './home/sidebar';
import HomeScreen from './home/homeScreen';
import UserScreen from './users/userScreen';
import LaptopScreen from './laptops/laptopScreen';
import LoanScreen from './loans/loanScreen';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100vh',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0,
  },
  toolbar: theme.mixins.toolbar,
});

function ClippedDrawer(props) {
  const { classes } = props;
  
  return (
    <div className={classes.root}>
      <Header />
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <List>{ Sidebar }</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container spacing={24}>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <Route exact path="/" render={() => <HomeScreen />} />
                  <Route path="/users" render={() => <UserScreen /> }/>
                  <Route path="/laptops" render={() => <LaptopScreen /> }/>
                  <Route path="/loans" render={() => <LoanScreen /> }/>
                </Paper>
            </Grid>
        </Grid>
      </main>
    </div>
  );
}

ClippedDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClippedDrawer);