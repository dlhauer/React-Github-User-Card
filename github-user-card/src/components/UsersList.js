import React from 'react';
import UserCard from './UserCard';

class UsersList extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <h2>UsersList</h2>
        <UserCard/>
      </div>
    )
  }
}

export default UsersList;