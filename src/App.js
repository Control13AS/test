import React, { Component } from 'react';
import './App.css';
import axios from "axios";

class App extends Component {
  state = {
    users: []
  };

  async componentDidMount() {
    let result = await axios.get('https://jsonplaceholder.typicode.com/users');
    this.setState({users: result.data});
    console.log(this.state.users);
  }   
  render() {
  return (
    <div className="App">
      {
        <button onClick = {this.getUsers}>GetUsers</button>  
      }
      <div>
        {this.state.users.map(user => (
          <ul>
            <li>
              {user.name}
            </li>
          </ul>

        ))}
      </div>
    </div>
  );
}}

export default App;

/*getUsers = () => {    
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => console.log(json))   
    console.log(this.state.phArray)
  }*/