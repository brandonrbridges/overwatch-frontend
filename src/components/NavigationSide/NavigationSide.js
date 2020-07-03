import React from 'react'
import { NavLink } from 'react-router-dom'

import { Container, Dropdown, Nav, NavItem } from 'react-bootstrap'

import './NavigationSide.scss'

export default class NavigationSide extends React.Component {
  render() {
    return (
      <Container fluid id="NavigationSide">
        <Nav>
          <NavLink to='/' className='nav-link' activeClassName='active'>Dashboard</NavLink>
          <NavLink to='/customers' className='nav-link' activeClassName='active'>Customers</NavLink>
        </Nav>
      </Container>
    )
  }
}