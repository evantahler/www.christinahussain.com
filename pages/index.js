import React from 'react'
// import { Row, Col } from 'react-bootstrap'

import Page from './../components/layouts/page.js'
import Header from './../components/sections/header.js'
import About from './../components/sections/about.js'
import KidsTeam from './../components/sections/kidsTeam.js'
import PersonalProjects from './../components/sections/personalProjects.js'
import Contact from './../components/sections/contact.js'
import RelevantCoursework from './../components/sections/relevantCoursework.js'
import Footer from './../components/sections/footer.js'

export default class extends React.Component {
  render () {
    return (
      <Page>

        <br />
        <Header />

        <hr />
        <About />

        <hr />
        <RelevantCoursework />

        <hr />
        <KidsTeam />

        <hr />
        <PersonalProjects />

        <hr />
        <Contact />

        <hr />
        <Footer />

      </Page>
    )
  }
}
