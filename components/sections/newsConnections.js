import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Poloroid from './../images/poloroid'

export default class extends React.Component {
  render () {
    return (
      <div id='newsConnections'>
        <Row>
          <Col md={12}>
            <h2>News Connections App Prototype</h2>
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <Poloroid src='/static/images/ConnectionsPage.png' caption='"Connections"' />
          </Col>
          <Col md={9}>
            <h3>Context</h3>
            <p>As the final research project for my Design Methods course, the two other members of my team and I went through the iterative process of creating an artifact that facilitates news discussion with family members.</p>
            <br />
            <h3>Role</h3>
            <p>I partnered with my team members on the interview, ideation, and user testing processes. I was solely responsible for creation of the wireframes and final visual design for the paper prototype of the application.</p>
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <Poloroid src='/static/images/FullLayoutApp.png' caption='The Screens of the App' />
          </Col>
          <Col md={9}>
            <h3>The Design Process</h3>
            <ol>
              <li>Went through a semi-structured interview process with stakeholders in order to determine their underlying needs and desires regarding communicating with family members about the news.</li>
              <li>Coded the data from the interviews and arranged into themes.</li>
              <li>Developed three personas in order to represent the themes found in the interview data.</li>
              <li>Went through several idea generation sessions in order to develop an artifact (a smartphone application) that would best serve to meet the underlying needs uncovered in the interview process.</li>
              <li>Sketched out the key features of the app, focusing on the most important elements for users.</li>
              <li>Used Adobe Illustrator to create wireframes of the app and eventually a low-fidelity paper prototype.</li>
              <li>Went through a usability testing process with multiple users, noting task success, errors, and general feedback.</li>
              <li>Used the data collected from the usability testing process to create a plan for future iterations of the prototype.</li>
            </ol>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Poloroid src='/static/images/Articles_Illustrator.png' caption='Prototyping in Illustrator' />
          </Col>
          <Col md={6}>
            <Poloroid src='/static/images/PaperPrototype.JPG' caption='Early Sketching' />
          </Col>
        </Row>
      </div>
    )
  }
}
