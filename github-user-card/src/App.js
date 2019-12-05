import React from 'react';
import './App.css';
import UsersList from './components/UsersList';
import axios from 'axios';




class App extends React.Component {
  
  state = {
    users: [],
    userText: 'dlhauer'
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/${this.state.userText}`)
      .then(response => {
        this.setState({
          users: [...this.state.users, response.data]
        });
        axios.get(response.data.followers_url)
          .then(response => {
            response.data.forEach( item => {
              axios.get(`https://api.github.com/users/${item.login}`)
                .then( response => {
                  this.setState( {
                    users: [...this.state.users, response.data]
                  })
                })
            })
          })
      })
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.userText !== this.state.userText) {
  //     console.log('new users state');
  //     // axios.get(`https://api.github.com/users/${this.state.userText}`)
  //     // this.fetchUsers();
  //   }
  // }

  handleChanges = e => {
    this.setState({
      userText: e.target.value
    })
  }

  // fetchUsers = e => {
  //   e.preventDefault();
  //   axios.get(`https://api.github.com/users/${this.state.userText}`)
  //     .then(response => {
  //       this.setState({
  //         users: [...this.state.users, response.data]
  //       });
  //       axios.get(response.data.followers_url)
  //         .then(response => {
  //           response.data.forEach( item => {
  //             axios.get(`https://api.github.com/users/${item.login}`)
  //               .then( response => {
  //                 this.setState( {
  //                   users: [...this.state.users, response.data]
  //                 })
  //               })
  //           })
  //         })
  //     })
  // }


  render() {
    // console.log(this.state.userText)
    return (
      <div className="App">
        <input 
          type='text'
          value={this.state.userText}
          onChange={this.handleChanges}
          placeholder='search for some nerd on Github'
        />
        {/* <button onClick={this.fetchUsers}>Search</button> */}
        <UsersList users={this.state.users}/>
      </div>
    );
  }
}

export default App;
