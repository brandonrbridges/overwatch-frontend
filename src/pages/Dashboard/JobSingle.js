/** React & Router */
import React from 'react'
import { Link, Redirect } from 'react-router-dom'

/** Axios */
import Axios from '../../config/axios'

/** Modules */
import moment from 'moment'

/** Helpers */
import { isAuthenticated } from '../../helpers/Authentication'

/** React Bootstrap */
import { Badge, Col, Container, Nav, Row, Tab, Table } from 'react-bootstrap'

/** Layouts */
import DashboardLayout from '../../layouts/DashboardLayout'

/** Components */
// import EditJobForm from '../../components/EditJobForm/EditJobForm'
import DashboardWidget from '../../components/DashboardWidget/DashboardWidget'

/** Font Awesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowLeft } from '@fortawesome/pro-solid-svg-icons'

export default class DashboardJobSingle extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      auth: true,
      customer: null,
      first_name: null,
      last_name: null,
    }
  }

  componentDidMount() {
    if(!isAuthenticated()) this.setState({ auth: false })
    
    const { match: { params } } = this.props
    
    Axios.get(`jobs/${ params.id }`, { headers: { 'x-access-token': localStorage.getItem('x-access-token') } })
    .then(response => this.setState({ job: response.data.job, order: response.data.order }))
  }

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }

  render() {
    let { 
      auth,
      job,
    } = this.state

    if(!auth) return <Redirect to='/login' />

    if(!job) return <p>loading..</p>

    return (
      <DashboardLayout>
        <Container fluid className='bg-white pt-5 pb-4'>
          <Link to='/dashboard/jobs' className='d-block mb-2'><FontAwesomeIcon icon={faLongArrowLeft} className='mr-2' />Return to jobs</Link>
          <h1>{job._id}</h1>
        </Container>

        <Tab.Container defaultActiveKey='summary'>
          <Container fluid className='bg-white mb-4'>
            <Nav variant='tabs'>
              <Nav.Item>
                <Nav.Link eventKey='summary'>Summary</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='information'>Edit Information</Nav.Link>
              </Nav.Item>
            </Nav>
          </Container>
          <Container fluid>
          <Tab.Content>
            <Tab.Pane eventKey='summary'>
              <Row>
                <Col>
                  <DashboardWidget title='Overview' className='mb-4'>
                    {job.customer_id}
                  </DashboardWidget>
                </Col>
                <Col>
                  <DashboardWidget title='Notes'>
                    {(job.notes ? <p>{job.notes}</p> : <p>No notes found are on this job</p>)}
                  </DashboardWidget>
                </Col>
              </Row>
              
              
            </Tab.Pane>
            <Tab.Pane eventKey='information'>
              <DashboardWidget title={`Edit job details`}>
                {/* <EditCustomerForm customerId={customer._id} /> */}
              </DashboardWidget>
            </Tab.Pane>
          </Tab.Content>
          </Container>
        </Tab.Container>  
      </DashboardLayout>
    )
  }
}