import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Form } from 'react-bootstrap'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import GoogleButton from 'react-google-button'
import Navbarpage from './Navbarpage';
import { fetchLogins } from '../store/actions/loginActions';

class Loginpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          users: [],
          password:"",
          email:"",
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
        
        const email = this.state.email
        const password = this.state.password
        const newUser = {
            email: email,
            password: password
        }
       
        this.props.fetchLogins (newUser)
        this.props.history.push("/citiespage")
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
                        <MDBInput name="email" value={this.state.email} onChange={this.onChange} label="Your email" icon="envelope" group type="email" validate error="wrong"
                                success="right" />
                        <MDBInput name="password" value={this.state.password} onChange={this.onChange} label="Your password" icon="lock" group type="password" validate />
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

const mapStateToProps = state => ({
    users: state.users
})

export default connect(mapStateToProps, {fetchLogins})(Loginpage)