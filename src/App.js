import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { fetchUser } from './helpers/Authentication'

import Dashboard from './pages/Dashboard'
import DashboardCustomers from './pages/Dashboard/Customers'
import DashboardCustomerSingle from './pages/Dashboard/CustomerSingle'
import DashboardSettings from './pages/Dashboard/Settings'
import DashboardUsers from './pages/Dashboard/Users'
import DashboardUserSingle from './pages/Dashboard/UserSingle'
import Home from './pages/Home'
import Login from './pages/Login'

export default class App extends React.Component {
  constructor() {
    super()

    this.state = {
      user: {
        email: null,
        first_name: null,
        last_name: null,
        role: null
      }
    }
  }

  componentDidMount() {
    if(fetchUser()) {
      let jwtUser = fetchUser()
      let newUser = this.state.user
      newUser.email = jwtUser.email
      newUser.first_name = jwtUser.first_name
      newUser.last_name = jwtUser.last_name
      newUser.role = jwtUser.role
      this.setState({ user: newUser })
    }
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />

          <Route exact path='/dashboard' component={() => <Dashboard user={this.state.user.first_name} />} />

          <Route exact path='/login' component={Login} />

          <Route exact path='/dashboard/customers' component={DashboardCustomers} />
          <Route exact path='/dashboard/customers/:id' component={DashboardCustomerSingle} />

          <Route exact path='/dashboard/settings' component={DashboardSettings} />

          <Route exact path='/dashboard/users' component={DashboardUsers} />
          <Route exact path='/dashboard/users/:id' component={DashboardUserSingle} />
        </Switch>
      </Router>
    )
  }
}