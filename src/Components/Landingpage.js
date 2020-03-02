import React, { Component, useRef, useState } from 'react'
import {Navbar, Nav, NavDropdown, Overlay, Tooltip, Image, Carousel} from 'react-bootstrap'
import {Link} from "react-router-dom"
import Navbarpage from './Navbarpage';


export default class Landingpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          cities: [],
          name:"",
          country:"",
          image:"",
          
        
        };
      }
      componentDidMount() {
        fetch('http://localhost:5000/cities/all')
        .then(response => response.json())
        .then(response => {
            this.setState({
                cities: response
                
              })
              
            })
            .catch(err=>console.log(err))
        }
        

    render() {

      const pictures = this.state.cities.map(cities => {return cities.image})
      
         
        return (
            <div>
                <div className="container">
                  <Navbarpage />
                    <div className="logoimage">
                    <Image className="bg-image" src="/images/MYtineraryLogo.png" style = {{width: 300,height: 125}}/>
                    </div>
                    <div className="introduction">
                    <p>Find your perfect trip, designed by insiders who know and love their cities. </p>
                    </div>
                    <div className="startBrowsing">
                    <Link id="citiespage" to="/citiespage">
                    <Image className="bg-image" src="/images/circled-right-2.png" style = {{width: 100,height: 100}} />
                    </Link>
                    </div>
                    <p>Popular MYtineraries</p>
                    <div className="carousel">
                    <Carousel>
                    <Carousel.Item>
                        <div style={{display: 'flex', flexWrap: 'wrap'}}>
                            <Image
                            className="d-block w-50"
                            src={pictures[0]}
                            alt="Third slide"
                            thumbnail
                            style={{width: 150, height: 125}} 
                            />
                            <Image
                            className="d-block w-50"
                            src={pictures[1]}                            
                            alt="Third slide"
                            thumbnail
                            style={{width: 150, height: 125}}  
                            />
                            <Image
                            className="d-block w-50"
                            alt="Third slide"
                            src={pictures[2]}
                            thumbnail 
                            style={{width: 150, height: 125}} 
                            />
                            <Image
                            className="d-block w-50"
                            src={pictures[3]}
                            alt="Third slide"
                            thumbnail 
                            style={{width: 150, height: 125}} 
                            />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div style={{display: 'flex', flexWrap: 'wrap'}}>
                            <Image
                            className="d-block w-50"
                            src={pictures[4]}
                            alt="Third slide"
                            thumbnail 
                            style={{width: 150, height: 125}} 
                            />
                            <Image
                            className="d-block w-50"
                            src={pictures[5]}                            
                            alt="Third slide"
                            thumbnail 
                            style={{width: 150, height: 125}} 
                            />
                            <Image
                            className="d-block w-50"
                            alt="Third slide"
                            src={pictures[6]}
                            thumbnail 
                            style={{width: 150, height: 125}} 
                            />
                            <Image
                            className="d-block w-50"
                            src={pictures[7]}
                            alt="Third slide"
                            thumbnail 
                            style={{width: 150, height: 125}} 
                            />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div style={{display: 'flex', flexWrap: 'wrap'}}>
                            <Image
                            className="d-block w-50"
                            src={pictures[8]}
                            alt="Third slide"
                            thumbnail 
                            style={{width: 150, height: 125}} 
                            />
                            <Image
                            className="d-block w-50"
                            src={pictures[9]}                            
                            alt="Third slide"
                            thumbnail 
                            style={{width: 150, height: 125}} 
                            />
                            <Image
                            className="d-block w-50"
                            alt="Third slide"
                            src={pictures[10]}
                            thumbnail 
                            style={{width: 150, height: 125}} 
                            />
                            <Image
                            className="d-block w-50"
                            src={pictures[11]}
                            alt="Third slide"
                            thumbnail 
                            style={{width: 150, height: 125}} 
                            />
                        </div>
                    </Carousel.Item>
                      </Carousel>
                      
                    </div>
                    
                </div>
            </div>
        )
    }
}
