import React from 'react';
import Typography from '@material-ui/core/Typography';

export default class Loans extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className={this.props.classes.toolbar} />
        <Typography noWrap>Loans</Typography>
      </div>
    );
  }
}
