import React from 'react';
import './App.css';
import UsersList from './components/UsersList';
import axios from 'axios';




class App extends React.Component {
  
  state = {
    users: [],
    userText: ''
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/dlhauer')
      .then(response => {
        // console.log(response.data);
        this.setState({
          users: [...this.state.users, response.data]
        });
        axios.get(response.data.followers_url)
          .then(response => {
            // console.log(this.state.users);
            this.setState({
              users: [...this.state.users, ...response.data]
            });
          })
      })

      // axios.get('https://api.github.com/users/dlhauer/followers')
      //   .then(response => {
      //     console.log(response.data);
      //     this.setState({
      //       users: [...users, response.data]
      //     });
      //   })
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <h1>App</h1>
        <UsersList/>
      </div>
    );
  }
}

export default App;
