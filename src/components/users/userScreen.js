import React from 'react';
import UserForm from "./userForm";
import UserList from "./userList";

export default class UserScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <UserForm />
        <UserList />
      </div>
    )
  }
};