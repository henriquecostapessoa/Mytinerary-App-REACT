import React, { Component, useRef, useState } from 'react'
import {Form, FormControl, Image, Card, NavDropdown, Navbar, Nav, Overlay, Tooltip} from 'react-bootstrap'
import { connect } from 'react-redux'
import { fetchCities } from '../store/actions/cityActions';
import {Link} from "react-router-dom"
import Navbarpage from './Navbarpage';

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
            return city.name.toLowerCase().startsWith(this.state.mySearch.toLowerCase())})
            .map((city, index)=>{
        
            return (
                <div key={index}>
                  <Card id="allCard" className="bg-dark text-white" >
                  <Card.Img src={city.image} alt="Card image" style={{width: 358, height: 225}} />
                  <Card.ImgOverlay>
                    <Card.Title id="cityName">
                    <Link id="Itinerary" to={{
                      pathname:"/itinerary", 
                      state: {
                        city: city
                      }}}> 
                    
                    <p id="cityColor"> {city.name}</p> 
    
                  </Link>
                    </Card.Title>
                
                  </Card.ImgOverlay>
                </Card>
                   
                </div>
            )
            
    
        })

       
        return (
            <div>
                <Navbarpage />
                    
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
