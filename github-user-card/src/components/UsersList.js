import React from 'react';
import UserCard from './UserCard';

class UsersList extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        {/* <h1>UsersList</h1> */}
        {this.props.users.map( (user, index, array) => (
          <UserCard user={user} order={index} length={array.length} key={index} />
        ))}
      </div>
    )
  }
}

export default UsersList;