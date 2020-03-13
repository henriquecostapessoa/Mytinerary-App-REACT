import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import GoogleButton from 'react-google-button'
import Navbarpage from './Navbarpage';
import { fetchLogins } from '../store/actions/loginActions';

export default class Loginpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          users: [],
          username:"",
          password:"",
          email:"",
          picture:"",
          myAcount:""
        };
        this.onChange = this.onChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
      }

   
      onChange(e) {
          
          this.setState({[e.target.name]: e.target.value})
          
      }

    handleClick(e) {
        e.preventDefault()
        
        const username = this.state.username
        const picture = this.state.picture
        const email = this.state.email
        const password = this.state.password
        const newUser = {
            username: username,
            picture: picture,
            email: email,
            password: password
        }
       
        this.props.fetchLogins (newUser)
        
      }
      
    render() {
        return (
            <div>
                <Navbarpage />
                <MDBContainer>
                <MDBRow>
                    <MDBCol md="6">
                    <form onSubmit={this.handleClick}>
                        <p className="h4 text-center mb-4">Sign in</p>
                        <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                        Your email
                        </label>
                        <input type="email" value={this.state.email} id="defaultFormLoginEmailEx" className="form-control" />
                        <br />
                        <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                        Your password
                        </label>
                        <input type="password" value={this.state.password} id="defaultFormLoginPasswordEx" className="form-control" />
                        <div class="g-signin2">
                        <GoogleButton 
                        type="light" // can also be written as disabled={true} for clarity
                        onClick={() => { window.location.href="http://localhost:5000/auth/google" }}
                        />   
                        </div>
                        <div className="text-center mt-4"> 
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
