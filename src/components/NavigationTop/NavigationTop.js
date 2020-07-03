import React from 'react'

import { Container } from 'react-bootstrap'

import SearchGlobal from '../SearchGlobal/SearchGlobal'

import './NavigationTop.scss'

export default class NavigationTop extends React.Component {
  render() {
    return (
      <Container fluid id="NavigationTop">
        <SearchGlobal />
      </Container>
    )
  }
}