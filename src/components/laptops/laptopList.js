import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import { connect } from "react-redux";
import compose from 'recompose/compose';
import { deleteLaptop } from "../../actions/index";

const mapStateToProps = state => {
  return { laptops: state.laptops };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteLaptop: id => dispatch(deleteLaptop(id))
  };
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%'
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
  },
});

class LaptopList extends React.Component {
  
  constructor(props) {
		super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(id) {
		this.props.deleteLaptop(id);
	}

  render() {
    const { classes, laptops } = this.props;
    
    return (
      <div className={classes.root}>
        <Grid container spacing={16}>
          <Grid item xs={12} md={12}>
            <div className={classes.demo}>
              <List dense >
							{laptops.map(laptop => (
                  <ListItem key={laptop.id}>
                    <ListItemIcon>
                      <LaptopMacIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={laptop.name}
                    />
                    <ListItemSecondaryAction>
                      <IconButton aria-label="Delete" onClick={() => this.handleDelete(laptop.id)}>
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
              </List>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

LaptopList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
	withStyles(styles),
	connect(mapStateToProps, mapDispatchToProps)
)(LaptopList);