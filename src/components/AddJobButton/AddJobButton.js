import React from 'react'

import { Button, Modal } from 'react-bootstrap'

import AddJobForm from '../AddJobForm/AddJobForm'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/pro-solid-svg-icons'

export default class AddJobButton extends React.Component {
  constructor() {
    super()

    this.state = {
      showModal: false
    }
  }

  handleClose = () => this.setState({ showModal: false })

  handleShow = () => this.setState({ showModal: true })
  
  render() {
    let { showModal } = this.state 

    return (
      <>
        <Button variant='success' className={this.props.className} onClick={this.handleShow}>Add Job<FontAwesomeIcon icon={faPlus} className='ml-2 small' /></Button>

        <Modal centered size='lg' animation={false} show={showModal} onHide={this.handleClose}>
          <Modal.Header closeButton>
            Add Job
          </Modal.Header>
          <Modal.Body>
            <AddJobForm />
          </Modal.Body>
        </Modal>
      </>
    )
  }
}