import React from 'react';
import Typography from '@material-ui/core/Typography';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Typography variant="title" align="center" color="textPrimary">
          <br />Home
        </Typography>
      </div>
    );
  }
}