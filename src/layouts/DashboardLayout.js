import React from 'react'

import { Col, Container, Row } from 'react-bootstrap'

import NavigationSide from '../components/NavigationSide/NavigationSide'
import NavigationTop from '../components/NavigationTop/NavigationTop'

export default class DashboardLayout extends React.Component {
  render() {
    return (
      <section id="DashboardLayout" style={{ minHeight: '100vh' }}>
        <Row>
          <Col xs={1} style={{ minHeight: '100vh', paddingRight: '0' }}>
            <NavigationSide />
          </Col>
          <Col style={{ paddingLeft: '1px' }}>
            <NavigationTop />
            <Container fluid style={{ padding: '1rem' }}>
              {this.props.children}
            </Container>
          </Col>
        </Row>
      </section>
    )
  }
}