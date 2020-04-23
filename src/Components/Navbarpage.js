import React, { Component, useRef, useState } from 'react';
import {Navbar, Nav, Overlay, Tooltip, Image } from 'react-bootstrap';
import {Link} from "react-router-dom";

class Navbarpage extends Component {

    render() {

        function Avatar() {
            const [show, setShow] = useState(false);
            const target = useRef(null);
          
            return (
              <>
                <Image ref={target} onClick={() => setShow(!show)} className="profile-image" src="/images/109879063-user-avatar-icon-sign-profile-symbol.jpg" style = {{width: 42,height: 42}}/>
                <Overlay target={target.current} show={show} placement="bottom">
                  {props => (
                    <Tooltip id="overlay" {...props}>
                      <Link id="registration" to="/registrationpage">Create Account</Link><br></br>
                      <Link id="login" to="/loginpage">Login in</Link><br></br>
                      <Link id="logout" to="/#" onClick={() => { window.location.href="http://localhost:5000/auth/logout" }}>Logout</Link>
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
                    <Avatar />
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                      <Nav>
                          <Link to="/registrationpage">Create Account</Link>
                          <Link to="/loginpage">Login in</Link>
                          <Link id="cities" to="/citiespage">Cities</Link>
                          <Link id="home" to="/">Home</Link>
                      </Nav>
                    </Navbar.Collapse>
                </Navbar>
              </div>   
            </div>
        )
    }
}

export default (Navbarpage)