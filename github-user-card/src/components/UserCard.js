import React from 'react';

class UserCard extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const mainUser = this.props.order === 0;
    const firstFollower = this.props.order === 1;
    const additionalFollower = this.props.order > 1 && this.props.order < this.props.length - 1;
    const finalFollower = this.props.order === this.props.length - 1;
    // console.log(first);
    return (
      <div className={`user-card${mainUser ? ' main-user' : ''}`}>
        {mainUser && <h2>THE NERD YOU SEARCHED FOR</h2>}
        {firstFollower && <h2>A NERD WHO FOLLOWS THE NERD YOU SEARCHED FOR</h2>}
        {additionalFollower && <h2>ANOTHER NERD WHO FOLLOWS THAT NERD</h2>}
        {finalFollower && <h2>THE FINAL NERD WHO FOLLOWS THE NERD YOU SEARCHED FOR</h2>}
        <h3>{this.props.user.name}</h3>
        <img src={this.props.user.avatar_url} alt={`avatar for ${this.props.user.login}`} />
        <p>{`Github handle: ${this.props.user.login}`}</p>
        <p>{`Bio: ${this.props.user.bio}`}</p>
        <p>{`Location: ${this.props.user.location}`}</p>
        <p>{`Public repos: ${this.props.user.public_repos}`}</p>
      </div>
    )
  }
}

export default UserCard;