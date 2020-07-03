import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Dashboard from './pages/Dashboard'

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route exact path='/customers' component={Dashboard} />
        </Switch>
      </Router>
    )
  }
}