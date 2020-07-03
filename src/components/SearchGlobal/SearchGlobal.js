import React from 'react'

import { Form } from 'react-bootstrap'

export default class SearchGlobal extends React.Component {
  render() {
    return (
      <Form>
        <Form.Control type='text' name='SearchGlobal' />
      </Form>
    )
  }
}