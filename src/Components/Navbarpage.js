import React, { Component, useRef, useState } from 'react';
import {Navbar, Nav, NavDropdown, Overlay, Tooltip, Image, Carousel, Button} from 'react-bootstrap';
import {Link} from "react-router-dom";

export default class Navbarpage extends Component {

    render() {

        function Example() {
            const [show, setShow] = useState(false);
            const target = useRef(null);
          
            return (
              <>
                <Image ref={target} onClick={() => setShow(!show)} className="profile-image" src="/images/109879063-user-avatar-icon-sign-profile-symbol.jpg" style = {{width: 42,height: 42}}/>
                <Overlay target={target.current} show={show} placement="bottom">
                  {props => (
                    <Tooltip id="overlay-example" {...props}>
                      <Link id="registration" to="/registrationpage">Create Account</Link><br></br>
                      <Link id="login" to="/loginpage">Login in</Link><br></br>
                      <Link onClick={() => { window.location.href="http://localhost:5000/auth/logout" }}>Logout</Link>
                    </Tooltip>
                  )}
                </Overlay>
              </>
            );
          }

        return (
            <div>
                
                    <div className="profilephoto">
                    <Navbar bg="white" expand="lg">
                    <Example />
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                        
                            <NavDropdown.Item href="#action/3.1"><Link id="registration" to="/registrationpage">Create Account</Link></NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2"><Link id="login" to="/loginpage">Login in</Link></NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3"><Link id="cities" to="/citiespage">Cities</Link></NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3"><Link id="home" to="/">Home</Link></NavDropdown.Item>
                        
                        </Nav>
                    </Navbar.Collapse>
                    </Navbar>
                    </div>
                
            </div>
        )
    }
}
