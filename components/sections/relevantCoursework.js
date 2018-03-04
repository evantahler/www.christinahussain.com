import React from 'react'
import { Col, Row, Panel } from 'react-bootstrap'

export default class extends React.Component {
  render () {
    return (
      <div id='relevantCoursework'>
        <Row>
          <Col md={12}>
            <h2>Relevant Coursework</h2>
          </Col>
        </Row>

        <Row>
          <Col md={4}>
            <Panel className='border-primary' bsStyle='primary'>
              <Panel.Heading>
                <Panel.Title componentClass='h3'>Panel heading with a title</Panel.Title>
              </Panel.Heading>
              <Panel.Body>Panel content</Panel.Body>
            </Panel>
          </Col>
        </Row>
      </div>
    )
  }
}
