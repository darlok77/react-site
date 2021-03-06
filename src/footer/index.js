import React, { Component } from 'react'
import {
  Container,
  Footer
} from 'mdbreact'

class FooterPage extends Component {
  render() {
    return (
      <Footer color="unique-color-dark" className="page-footer font-small pt-0">
        <div className="footer-copyright text-center py-3">
          <Container fluid>
            &copy;
            {`${new Date().getFullYear()} Copyright:  Guillaume DALLEAU`}
          </Container>
        </div>
      </Footer>
    )
  }
}

export default FooterPage
