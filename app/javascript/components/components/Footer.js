import React, { Component } from 'react'
import { Container, Row, Col, Nav } from 'reactstrap'

export default class Footer extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h2>&copy; Creme de LaSlim Enterprises 2022</h2>
          </Col>
          <Col>
            <h3>
              <a href='https://github.com/NTR-TheMekaVerse'>NTR-TheMekaVerse GitHub</a>
            </h3>
          </Col>
        </Row>
      </Container>
    )
  }
}
