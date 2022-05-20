import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Card, CardBody, CardGroup, CardImg, CardText, CardTitle, Col, Container, Row } from 'reactstrap'

export default class ApartmentIndex extends Component {

  render() {
    return (
      <>

        <Container className='indexText'>
          <h2>Dreaming of being a Slumlord?</h2>
          <h3>Browse our selection...</h3><br />
          <p>List your nightmare property with us and we'll work to make sure it becomes someone else's</p>
        </Container>

        <Container>
          <CardGroup>

            {this.props.apartments && this.props.apartments.map(apartment => {
              return (
                <Col sm="8" md="6" xl="4">
                  <Card className='indexCard'>
                    
                    <CardImg
                      className='indexCardImage'
                      alt="Picture of property for sale"
                      src={apartment.image}
                      top
                    />
                    <CardBody>
                      <CardTitle tag="h5">
                        {apartment.street}<br />
                        {apartment.city}, {apartment.state}<br />
                        {apartment.price}
                      </CardTitle>
                      <CardText>
                        <p>Kosher certified, gluten free, nut free, non-GMO, paraben free. Included for your discomfort: expired termite bait, Charlotte's webs, and probably some reptile skin. Move-in bonus of a $30.92 gift card to <i>Home Goods</i> for all of your decor needs.</p>
                      </CardText>
                      <Button color='none'>
                        <NavLink to={`/apartmentshow/${apartment.id}`} color='white'>
                          Enter @ Own Risk
                        </NavLink>
                      </Button>
                    </CardBody>

                  </Card>
                </Col>

              )
            }
            )}

          </CardGroup>
        </Container>

      </>
    )
  }
}

