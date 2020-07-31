import React from 'react'

import { Link } from 'react-router-dom'

import Axios from '../../config/axios'

import moment from 'moment'

import { Dropdown, Table } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEllipsisV } from '@fortawesome/pro-solid-svg-icons'

import './JobTable.scss'

export default class JobTable extends React.Component {
  constructor() {
    super()

    this.state = {
      jobs: []
    }
  }

  componentDidMount() {
    Axios.get('jobs', { headers: { 'x-access-token': localStorage.getItem('x-access-token') } })
    .then(response => this.setState({ jobs: response.data.jobs }))
  }

  render() {
    let { jobs } = this.state

    if(jobs.length === 0) {
      return <p className='text-muted'>No jobs found..</p>
    }

    return (
      <Table borderless responsive>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Date Added</th>
            <th>Date Booked</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        {jobs.map(x => <JobRow id={x._id} customer={x.customer_id} dateAdded={x.date_added} dateBooked={x.date_booked} key={x._id} />)}
        </tbody>
      </Table>
    )
  }
}

class JobRow extends React.Component {
  render() {
    return (
      <tr>
        <td className='text-center' width='50px'><FontAwesomeIcon icon={faUser} className='text-center text-muted' /></td>
        <td>
          <Link to={`/dashboard/jobs/${this.props.id}`}>
            {this.props.id}
          </Link>
        </td>
        <td>{moment(this.props.dateAdded).format('MMMM Do YYYY')} <span className='small text-muted'>({moment(this.props.dateAdded).fromNow()})</span></td>
        <td>{moment(this.props.lastUpdated).format('MMMM Do YYYY')} <span className='small text-muted'>({moment(this.props.dateBooked).fromNow()})</span></td>
        <td className='text-right'>
          <Link to={`/dashboard/jobs/${this.props.id}`} className='btn btn-primary btn-sm'>View</Link>
          {/* <Button variant='secondary' className='btn-sm ml-3'><FontAwesomeIcon icon={faEllipsisV} /></Button> */}
          <Dropdown className='ml-3 options'>
            <Dropdown.Toggle variant='secondary' size='sm'><FontAwesomeIcon icon={faEllipsisV} /></Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => console.log('clicked dropdown item')}>Delete</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </td>
      </tr>
    )
  }
}