import React from 'react';
import Typography from '@material-ui/core/Typography';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className={this.props.classes.toolbar} />
        <Typography noWrap>Home</Typography>
      </div>
    );
  }
}