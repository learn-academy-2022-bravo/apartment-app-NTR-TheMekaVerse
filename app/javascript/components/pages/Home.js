import React, { Component } from 'react'
import { Container, UncontrolledCarousel } from 'reactstrap'

export default class Home extends Component {


  render() {
    return (
      <>

        <Container>
          <img src='https://de21-engine.flamingtext.com/netfu/tmp28007/coollogo_com-1138116.png' alt='Slumlord Estates logo' />
          <UncontrolledCarousel
            items={[
              {
                altText: 'Dilapilated House 1',
                caption: 'Slumlord Estates is your favorite property management company ',
                key: 1,
                src: 'https://images.unsplash.com/photo-1444419988131-046ed4e5ffd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
              },
              {
                altText: 'Dilapilated House 2',
                caption: 'List all of your wonderful dilapidated properties with us!',
                key: 2,
                src: 'https://images.unsplash.com/photo-1516822671976-480ad5131e92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
              }
            ]}
          />
        </Container>

      </>
    )
  }
}
