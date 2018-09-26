import React, { Component } from "react";
import { connect } from "react-redux";
import uuid from "uuid";
import { addUser } from "../../actions/index";
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import { styles } from '../../assets/css/users.js';

const mapDispatchToProps = dispatch => {
  return {
    addUser: user => dispatch(addUser(user))
  };
};

class UserForm extends Component {
  
	constructor(props) {
		super(props);
		this.state = {
			name: ""
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	handleChange(event) {
		this.setState({ [event.target.id]: event.target.value });
	}

	handleSubmit(event) {
		event.preventDefault();
		const { name } = this.state;
		const id = uuid();
		this.props.addUser({ id, name });
		this.setState({ name: "" });
	}

	render() {
		const { name } = this.state;
		const { classes } = this.props;
		return (
			<form 
					className={classes.container} 
					noValidate 
					autoComplete="off"
					onSubmit={this.handleSubmit}
			>
				<TextField
					id="name"
					label="Add a user"
					style={{ margin: 8 }}
					placeholder="User name"
					value={name}
					onChange={this.handleChange}
					fullWidth
					margin="normal"
					InputLabelProps={{
							shrink: true,
					}}
				/>
			</form>
		);
	}
}

UserForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
	withStyles(styles),
	connect(null, mapDispatchToProps)
)(UserForm);