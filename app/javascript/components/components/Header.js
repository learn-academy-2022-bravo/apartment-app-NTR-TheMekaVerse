import React, { Component } from 'react'
// import { Image } from '../assets/images/tools-folder.svg'
// yarn jest does not like the syntax of this import; research in order to add svg to header
import { Collapse, Nav, Navbar, NavbarBrand, NavItem, NavbarToggler, Container } from 'reactstrap'

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }


  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    console.log("logged_in:", logged_in)
    console.log("current_user:", current_user)



    return (
      <>

        <Container>
          <Navbar
            className='navbarStyle'
            container
            expand="sm"
            // fixed="top"   ** Would like to reinstate this feature but need to figure out margins for the navbar to not cover up the page on initial loading
            light
          >

            <NavbarBrand href="/" >
              {/* <img src={Image} class="mx-3" width="auto" height="40" /> */}
              <span className='navTitle'>Slumlord Estates</span>
            </NavbarBrand>

            <NavbarToggler onClick={this.toggle} />

            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav
                className="ml-auto"
                navbar
              >
                <NavItem>
                  {logged_in &&
                    <NavItem>
                      <a href={sign_out_route} className="nav-link"><h5>Sign Out</h5></a>
                    </NavItem>
                  }
                </NavItem>
                <NavItem>
                  {!logged_in &&
                    <NavItem>
                      <a href={`/apartmentindex`} className="nav-link"><h5>View Rentals</h5></a>
                    </NavItem>
                  }
                </NavItem>
                <NavItem>
                  {!logged_in &&
                    <NavItem>
                      <a href={sign_in_route} className="nav-link"><h5>Sign In</h5></a>
                    </NavItem>
                  }
                </NavItem>
                <NavItem>
                  {!logged_in &&
                    <NavItem>
                      <a href={new_user_route} className="nav-link"><h5>Sign Up</h5></a>
                    </NavItem>
                  }
                </NavItem>

              </Nav>
            </Collapse>

          </Navbar>
        </Container>


      </>
    )
  }
}
export default Header