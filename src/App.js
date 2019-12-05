import React, { Component } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Stock from './components/stock';
import Leaderboard from './components/leaderboard';
import 'bootswatch/dist/sandstone/bootstrap.min.css';
import './App.css';

class App extends Component {
  state = {
    "users": [],
    "items": [],
  }

  componentDidMount() {
    fetch('https://santa-shares.azurewebsites.net/api/users')
      .then(res => res.json())
      .then(data => {
        data.sort(function (a, b) { return b.balance - a.balance; })
        this.setState({ users: data })
      })
      .catch(console.log)

      fetch('https://santa-shares.azurewebsites.net/api/items')
      .then(res => res.json())
      .then(data => {
        data.sort(function (a, b) { return a.item_id - b.item_id; })
        this.setState({ items: data })
      })
      .catch(console.log)
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
              <a class="navbar-brand" href="#">Santa-Shares</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item">
                    <Link class="nav-link" to="/">Leaderboard</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/stock">Stock</Link>
                  </li>
                </ul>
              </div>
            </nav>
            <Switch>
              <Route path="/stock">
                <Stock items={this.state.items} />
              </Route>
              <Route path="/">
                <Leaderboard users={this.state.users} />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App;
