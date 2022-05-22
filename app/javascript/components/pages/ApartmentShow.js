import React, { Component } from 'react'
import { Col, Container, Image } from 'reactstrap'

export default class ApartmentShow extends Component {
  render() {
    return (

      <Container>
     
          <img src={this.props.apartment && this.props.apartment.image} alt="Fancy Pants House" width="500px"/>

      </Container>

    )
  }
}
