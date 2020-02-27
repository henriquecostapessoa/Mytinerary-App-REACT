import React, { Component, useRef, useState } from 'react'
import {Form, FormControl, Image, Card, NavDropdown, Navbar, Nav, Overlay, Tooltip} from 'react-bootstrap'
import { connect } from 'react-redux'
import { fetchCities } from '../store/actions/cityActions';
import {Link} from "react-router-dom"

class Citiespage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          cities: [],
          name:"",
          country:"",
          image:"",
          mySearch:"",
        
        };
      }

        componentWillMount() {
            this.props.fetchCities()
        }

        onChange = (e) => {
            this.setState({mySearch: e.target.value})
         }
         
        
    render() {
        const cities = this.props.cities.filter(city => {
            return city.name.toLowerCase().includes(this.state.mySearch.toLowerCase()) || city.country.toLowerCase().includes(this.state.mySearch.toLowerCase())})
            .map((city, index)=>{
        console.log(city.image)
            return (
                <div key={index}>
                   <div className="card text-center"> 
                  <Card>
                  <Link id="Itinerary" to={{
                      pathname:"/itinerary", 
                      state: {
                        city: city
                      }}}> 
                    <Card.Body>{city.name}</Card.Body>
                  </Link>
                  </Card>  
                  </div>
                </div>
            )
    
        })

        function Example() {
            const [show, setShow] = useState(false);
            const target = useRef(null);
          
            return (
              <>
                <Image ref={target} onClick={() => setShow(!show)} className="profile-image" src="/images/109879063-user-avatar-icon-sign-profile-symbol.jpg" style = {{width: 42,height: 42}}/>
                <Overlay target={target.current} show={show} placement="bottom">
                  {props => (
                    <Tooltip id="overlay-example" {...props}>
                      <Link id="login" to="/loginpage">Login in</Link><br></br>
                      <Link id="signin" to="/signinpage">Sign in</Link>
                    </Tooltip>
                  )}
                </Overlay>
              </>
            );
          }

        return (
            <div>
                <Navbar bg="white" expand="lg">
                    <Example />
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        
                        </Nav>
                    </Navbar.Collapse>
                    </Navbar>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={this.onChange} />
                </Form>

            {cities}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    cities: state.cities.items
})

export default connect(mapStateToProps, {fetchCities})(Citiespage)
