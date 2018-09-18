import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import compose from 'recompose/compose';

const mapStateToProps = state => {
  return { 
    users: state.users,
    laptops: state.laptops
  };
};


const styles = theme => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
	},
	dense: {
		marginTop: 16,
	},
	menu: {
		width: 200,
	},
});

class LoanScreen extends Component {
  
	constructor(props) {
		super(props);
		this.state = {
      user: '',
      laptop: ''
    };
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

	render() {
    const { classes, users, laptops } = this.props;

		return (
			<form 
					className={classes.container} 
					noValidate 
					autoComplete="off"
			>
        <TextField
          id="users"
          select
          label="User"
          className={classes.textField}
          value={this.state.user}
          onChange={this.handleChange('user')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Select the user asking for a loan"
          margin="normal"
        >
          {users.map(user => (
            <MenuItem key={user.id} value={user.name}>
              {user.name}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="laptops"
          select
          label="Laptop"
          className={classes.textField}
          value={this.state.laptop}
          onChange={this.handleChange('laptop')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Select the laptop given to the user"
          margin="normal"
        >
          {laptops.map(laptop => (
            <MenuItem key={laptop.id} value={laptop.name}>
              {laptop.name}
            </MenuItem>
          ))}
        </TextField>
      </form>
    );
  }
}

LoanScreen.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
	withStyles(styles),
	connect(mapStateToProps)
)(LoanScreen);