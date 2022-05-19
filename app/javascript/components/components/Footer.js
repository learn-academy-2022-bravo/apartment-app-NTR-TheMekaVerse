import React, { Component } from 'react'
import { Container, Row, Col, Nav } from 'reactstrap'

export default class Footer extends Component {
  render() {
    return (
      <Container fixed>
        <Row>
          <Col>
            <h4>&copy; Creme de LaSlim Enterprises 2022</h4>
          </Col>
          <Col>
            <h5>
              <a href='https://github.com/NTR-TheMekaVerse'>NTR-TheMekaVerse GitHub</a>
            </h5>
          </Col>
        </Row>
      </Container>
    )
  }
}
