import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import { fetchRegistrations } from '../store/actions/userActions';
import { connect } from 'react-redux'
import Navbarpage from './Navbarpage';

class Registrationpage extends Component {
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
       
        this.props.fetchRegistrations(newUser)
        
      }

    render() {
    
        return (
            <div>
                <Navbarpage />
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="6">
                        <form onSubmit={this.handleClick}>
                            <p className="h5 text-center mb-4">Sign up</p>
                            <div className="grey-text">
                            <MDBInput name="username" value={this.state.username} onChange={this.onChange} label="Your name" icon="user" group type="text" validate error="wrong"
                                success="right" />
                            <MDBInput name="picture" value={this.state.picture} onChange={this.onChange} label="Profile picture" icon="envelope" group type="text" validate error="wrong"
                                success="right" />    
                            <MDBInput name="email" value={this.state.email} onChange={this.onChange} label="Your email" icon="envelope" group type="email" validate error="wrong"
                                success="right" />
                            <MDBInput name="password" value={this.state.password} onChange={this.onChange} label="Your password" icon="lock" group type="password" validate />
                            </div>
                            <div className="text-center">
                            <MDBBtn type="submit" color="primary">Register</MDBBtn>
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

export default connect(mapStateToProps, {fetchRegistrations})(Registrationpage)
