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

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <UsersList users={this.state.users}/>
      </div>
    );
  }
}

export default App;
