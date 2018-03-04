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
              <Poloroid src='/static/images/me.jpg' caption='Me!' />
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
                Projects:
              </p>

              <p>
                <Button bsStyle='primary' href='#kidsteam'>Kids Team SPL</Button>
                <Button bsStyle='primary' href='#ancestry'>Research Project</Button>
                <Button bsStyle='primary' href='#personalProjects'>Personal Projects</Button>
              </p>
            </Col>
          </Row>
        </Jumbotron>
      </div>
    )
  }
}
