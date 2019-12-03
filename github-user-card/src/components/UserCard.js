import React from 'react';

class UserCard extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className='user-card'>
        <h2>{this.props.user.name}</h2>
        <img src={this.props.user.avatar_url} alt={`avatar for ${this.props.user.login}`} />
      </div>
    )
  }
}

export default UserCard;