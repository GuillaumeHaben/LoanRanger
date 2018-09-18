import React from 'react';
import LaptopForm from './laptopForm';
import LaptopList from './laptopList';

export default class LaptopScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <LaptopForm />
        <LaptopList />
      </div>
    );
  }
}
