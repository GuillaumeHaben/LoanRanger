export const styles = theme => ({
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
	demo: {
		backgroundColor: theme.palette.background.paper,
	},
	title: {
		margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
	},
	tableWrapper: {
	  overflowX: 'auto',
	},
  checkboxcell: {
    width: 50
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.grey[50],
    },
  },
});