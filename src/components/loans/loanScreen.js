import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import compose from 'recompose/compose';
import { DateRangePicker } from 'react-dates';
import Button from '@material-ui/core/Button';
import uuid from "uuid";
import { addLoan } from "../../actions/index";
import { deleteAllLoans } from "../../actions/index";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import Grid from '@material-ui/core/Grid';
import { styles } from '../../assets/css/loans.js';

const mapStateToProps = state => {
  return { 
    users: state.users,
    laptops: state.laptops,
    loans: state.loans
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addLoan: loan => dispatch(addLoan(loan)),
    deleteAllLoans: () => dispatch(deleteAllLoans())
  };
};

class LoanScreen extends Component {
  
	constructor(props) {
		super(props);
		this.state = {
      user: '',
      laptop: '',
      availableLaptops: this.props.laptops,
      startDate: null,
      endDate: null,
      focusedInput: null,
    };
		this.handleSubmit = this.handleSubmit.bind(this);
	}

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

	handleSubmit(laptopId) {
		const { user, startDate, endDate } = this.state;
		const id = uuid();
		this.props.addLoan({ id, user, laptopId, startDate, endDate });
		this.setState({ user: '', startDate: null, endDate: null, focusedInput: null });
	}

  availableLaptops(x, y) {
    if (x && y && x !== 'undefined' && y !== 'undefined') {
      const allLaptops = this.props.laptops;
      const allLoans = this.props.loans;
      
      const availableLaptops = allLaptops.filter(laptop => {
        const loanOfLaptop = allLoans.filter(loan => {
          return loan.laptopId === laptop.id
        });
        for (const loan of loanOfLaptop) {
          if (x.isBefore(loan.endDate) && y.isAfter(loan.startDate)) {
            return false
          }
        }
        return true
      });
      this.setState({availableLaptops});
    }
  }

	render() {
    const { classes } = this.props;
        
		return (
      <div>
			<form 
					className={classes.container} 
					noValidate 
          autoComplete="off"
          onSubmit={this.handleSubmit}
			>
        <DateRangePicker
          startDateId="startDate"
          endDateId="endDate"
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onDatesChange={({ startDate, endDate }) => { this.setState({ startDate, endDate }, () => this.availableLaptops(startDate, endDate))}}
          focusedInput={this.state.focusedInput}
          onFocusChange={(focusedInput) => { this.setState({ focusedInput })}}
        />
        <Button variant="outlined" className={classes.button} onClick={() => this.setState({availableLaptops: this.props.laptops, startDate: null, endDate: null})}>
          Reset
        </Button>
      </form>
      <div className={classes.root}>
        <Grid container spacing={16}>
          <Grid item xs={12} md={12}>
            <div className={classes.demo}>
              <List dense>
							{this.state.availableLaptops.map(laptop => (
                  <ListItem key={laptop.id}>
                    <ListItemIcon>
                      <LaptopMacIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={laptop.name}
                    />
                    <ListItemSecondaryAction>
                      <Button variant="outlined" className={classes.button} onClick={() => this.handleSubmit(laptop.id)}>
                        Loan
                      </Button>
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
              </List>
            </div>
          </Grid>
        </Grid>
      </div>
        <Button variant="outlined" className={classes.button} onClick={() => this.props.deleteAllLoans()}>
          Delete All Loans
        </Button>
      </div>
    );
  }
}

LoanScreen.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
	withStyles(styles),
	connect(mapStateToProps, mapDispatchToProps)
)(LoanScreen);