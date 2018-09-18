import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import { connect } from "react-redux";
import compose from 'recompose/compose';
import { deleteUser } from "../../actions/index";

const mapStateToProps = state => {
  return { users: state.users };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteUser: id => dispatch(deleteUser(id))
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

class UserList extends React.Component {
  
  constructor(props) {
		super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(id) {
		this.props.deleteUser(id);
	}

  render() {
    const { classes, users } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={16}>
          <Grid item xs={12} md={12}>
            <div className={classes.demo}>
              <List dense >
							{users.map(user => (
                  <ListItem key={user.id}>
                    <ListItemText
                      primary={user.name}
                    />
                    <ListItemSecondaryAction>
                      <IconButton aria-label="Delete" onClick={() => this.handleDelete(user.id)}>
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

UserList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
	withStyles(styles),
	connect(mapStateToProps, mapDispatchToProps)
)(UserList);