import React, {Component} from 'react';
import Stock from './components/stock';
import Leaderboard from './components/leaderboard';
import NavBar from './components/navbar';
import 'bootswatch/dist/darkly/bootstrap.min.css';
import './App.css';

class App extends Component {
  state = {
    "users" : []
  }

  componentDidMount() {
    fetch('https://santa-shares.azurewebsites.net/api/users')
    .then(res => res.json())
    .then(data => {
      data.sort(function(a, b) { return b.balance - a.balance; })
      this.setState({ users: data })
    })
    .catch(console.log)
  }

  render () {
    return (
      <div>
        <NavBar />
        <Leaderboard users={this.state.users} />
      </div>
    )
  }
}

export default App;
