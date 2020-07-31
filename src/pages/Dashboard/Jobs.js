import React from 'react'

import { Container } from 'react-bootstrap'

import DashboardLayout from '../../layouts/DashboardLayout'

import AddJobButton from '../../components/AddJobButton/AddJobButton'
import JobTable from '../../components/JobTable/JobTable'

export default class DashboardJobs extends React.Component {
  render() {
    return (
      <DashboardLayout>
        <Container fluid className='bg-white mb-4 py-5'>
          <h1>Jobs</h1>
        </Container>
        <Container fluid>
          <AddJobButton className='d-block mb-4' />
          <JobTable />
          <AddJobButton className='d-block mt-4 ml-auto' />
        </Container>
      </DashboardLayout>
    )
  }
}