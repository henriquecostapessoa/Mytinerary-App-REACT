import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import GoogleButton from 'react-google-button'
import Navbarpage from './Navbarpage';

export default class Loginpage extends Component {
    render() {
        return (
            <div>
                <Navbarpage />
                <MDBContainer>
                <MDBRow>
                    <MDBCol md="6">
                    <form>
                        <p className="h4 text-center mb-4">Sign in</p>
                        <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                        Your email
                        </label>
                        <input type="email" id="defaultFormLoginEmailEx" className="form-control" />
                        <br />
                        <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                        Your password
                        </label>
                        <input type="password" id="defaultFormLoginPasswordEx" className="form-control" />
                        <div className="text-center mt-4">
                        <GoogleButton 
                        type="light" // can also be written as disabled={true} for clarity
                        onClick={() => { window.location.href="http://localhost:5000/auth/google" }}
                        />    
                        <MDBBtn color="indigo" type="submit">Login</MDBBtn>
                        </div>
                    </form>
                    </MDBCol>
                </MDBRow>
                </MDBContainer>
            </div>
        )
    }
}
