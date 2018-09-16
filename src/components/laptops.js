import React from 'react';
import Typography from '@material-ui/core/Typography';

export default class Laptops extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className={this.props.classes.toolbar} />
        <Typography noWrap>Laptops</Typography>
      </div>
    );
  }
}
