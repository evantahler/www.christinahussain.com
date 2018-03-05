import React from 'react'
import { Col, Row, Jumbotron, Button } from 'react-bootstrap'
import Poloroid from './../images/poloroid'

export default class extends React.Component {
  render () {
    return (
      <div id='header'>
        <Jumbotron>
          <Row>
            <Col md={4}>
              <Poloroid src='/static/images/me.jpg' />
            </Col>
            <Col md={8}>
              <h1>Christina Hussain</h1>
              <p>
                GRADUATE STUDENT, INFORMATION SCIENCE<br />
                UNIVERSITY OF WASHINGTON<br />
                FALL 2017-SPRING 2019
              </p>

              <p>
                <Button bsStyle='primary' bsSize='large' href='#about'>About</Button>
                <Button bsStyle='primary' bsSize='large' href='#relevantCoursework'>Relevant Coursework</Button>
                <Button bsStyle='primary' bsSize='large' href='#contact'>Contact</Button>
                <Button bsStyle='primary' bsSize='large' href='/static/downloads/ChristinaHussain_Resume.pdf'>Download Resume</Button>
              </p>

              <hr />

              <p>
                School Projects:
              </p>

              <p>
                <Button bsStyle='primary' href='#kidsteam'>Participatory Design</Button>
                <Button bsStyle='primary' href='#ancestry'>Research Project</Button>
                <Button bsStyle='primary' href='#newsConnections'>App Prototype</Button>
              </p>
              <p>
                Personal Projects:
              </p>

              <p>
                <Button bsStyle='primary' href='#personalProjects'>Scoreboard.guru</Button>
                <Button bsStyle='primary' href='#personalProjects'>Star Team</Button>
                <Button bsStyle='primary' href='#personalProjects'>Research & Recommendations</Button>
              </p>
            </Col>
          </Row>
        </Jumbotron>
      </div>
    )
  }
}
