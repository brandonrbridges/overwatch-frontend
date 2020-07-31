import React from 'react'

import { Redirect } from 'react-router-dom'

import Axios from '../../config/axios'

import { Button, Col, Form } from 'react-bootstrap'

export default class AddJobForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      customers: [],
      customer_id: null,
      accomodation: null,
      sqm: null,
      city: null,
      done: false
    }
  }

  componentWillMount() {
    Axios.get('customers', { headers: { 'x-access-token': localStorage.getItem('x-access-token') } })
    .then(response => this.setState({ customers: response.data.customers }))
  }

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()

    console.log(this.state)

    Axios.post('jobs/new', this.state, { headers: { 'x-access-token': localStorage.getItem('x-access-token') } })
    .then(response => this.setState({ done: true }))
  }

  render() {
    let { customers, done } = this.state

    if(done) return <Redirect to='/dashboard/jobs' />

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Row className='mb-4'>
          <Col>
            <Form.Label>Customer</Form.Label>
            <Form.Control as='select' name='customer_id' onChange={this.handleChange}>
              {customers.map(x => <option value={x._id}>{x.first_name} {x.last_name}</option>)}
            </Form.Control>
          </Col>
        </Form.Row>
        <Form.Row className='mb-4'>
          <Col>
            <Form.Label>Accomodation</Form.Label>
            <Form.Control as='select' name='accomodation' onChange={this.handleChange}>
              <option value='apartment'>Apartment</option>
              <option value='house'>House</option>
              <option value='villa'>Villa</option>
            </Form.Control>
          </Col>
          <Col>
            <Form.Label>SQM</Form.Label>
            <Form.Control type='text' name='sqm' onChange={this.handleChange} />
          </Col>
          <Col>
            <Form.Label>City</Form.Label>
            <Form.Control type='text' name='city' onChange={this.handleChange} />
          </Col>
        </Form.Row>
        <Form.Row className='mb-4'>
          <Col>
            <Form.Label>Booking Date</Form.Label>
            <input type='datetime' name='date_booked' />
          </Col>
        </Form.Row>
        <Button type='submit' variant='success' className='d-block ml-auto'>Add Customer</Button>
      </Form>
    )
  }
}