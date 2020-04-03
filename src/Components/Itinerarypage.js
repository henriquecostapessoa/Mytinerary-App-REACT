import React, { Component } from 'react'
import { fetchItineraries } from '../store/actions/itineraryActions';
import { fetchFavorites } from '../store/actions/likeButtonActions';
import { connect } from 'react-redux'
import { Link } from "react-router-dom"
import Navbarpage from './Navbarpage';
import { MDBCloseIcon } from "mdbreact"
import { Button, Accordion, Image, Card } from 'react-bootstrap'
import Activitiespage from './Activitiespage';
import LikeButton from './likeButton';
import Axios from 'axios';
import PropTypes from "prop-types"
import FavoriteIcon from "@material-ui/icons/Favorite"
import FavoriteBorder from "@material-ui/icons/FavoriteBorder"


class Itinerarypage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          datain: false,  
          itineraries: [],
          id: "",
          liked: false
        };
        this.handClick = this.handClick.bind(this);
        this.handleClick = this.handleClick.bind(this);
      }


      componentDidMount() {
        this.props.fetchItineraries(this.props.location.state.city._id)
        this.props.fetchFavorites()
    }

    handleClick(myId) {
      this.setState({
        id: myId,
      })
      
    }
    handClick() {
      this.setState({
        liked: !this.state.liked,
      });
    }
    
    render() {
      console.log(this.props)
  
    /* const favorites = this.props.favourites
    itineraries.filter(itn=> favorites.includes(itn._id))
    
    itineraries.filter(itn=>{
        favorites.forEach(itnFav=>{
            if(itnFav._id === itn._id){
                console.log(itn)
            }
        })
    } ) */

      console.log(this.state.id)
      const pStyle = {
        margin: 10
      }  
      const hStyle = {
        marginLeft: 10
      }

      const text = this.state.liked ? 'liked' : 'haven\'t liked';
      const label = this.state.liked ? <FavoriteIcon color="primary" /> : <FavoriteBorder color="primary" />
      const itineraries = this.props.itineraries.map(itinerary => {
      
      return (
      <Card>
      <Card.Body>
      <div className="flex-container">
      <div id="alignProfile">  
      <Image className="bg-image" src="/images/109879063-user-avatar-icon-sign-profile-symbol.jpg" style = {{width: 42,height: 42}} />
      <p>Henrique Pessoa</p>
      </div>
      <div id="organizeItinerary">
      <h5 style={hStyle}>{itinerary.title}</h5>
      <div id="organizeRating">
      <p style={pStyle}>{itinerary.rating}</p>
      <p style={pStyle}>{itinerary.duration}</p>
      <p style={pStyle}>{itinerary.price}</p>
      </div>
      <p style={hStyle}>{itinerary.hashtags}</p>
      <div>
      <div className="customContainer">
              <button className="btn" onClick={this.handClick}>
                {label}</button>
              <p>
                you {text} this. Click to toggle.
              </p>
            </div>
      
      </div>
      </div>
      </div>
      <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} onClick={() => this.handleClick(itinerary._id)} variant="link"  eventKey="1">
            Activities
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            {this.state.id === itinerary._id && <Activitiespage myid={itinerary._id}/>}
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Accordion.Toggle as={Button} onClick={() => this.handleClick(itinerary._id)} variant="link"  eventKey="1">
            Close
      </Accordion.Toggle>
      </Accordion>
      </Card.Body>
      </Card>
      
      )
      })

      const city = this.props.location.state.city
        
        return (
        
            <div>
              
              <Card className="bg-dark text-white" >
                  <Card.Img src={city.image} alt="Card image" style={{width: 358, height: 225}} />
                  <Card.ImgOverlay>
                    <Card.Title id="cityName">
                    
                    <p id="cityColor"> {city.name}</p> 
    
                    </Card.Title>
                
                  </Card.ImgOverlay>
                </Card><br></br>
                <p>Available MYtineraries:</p>
               {itineraries}<br></br>
               <Link style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                  }} id="citiespage" to="/citiespage">Choose another city</Link><br></br>
               <Link style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                  }} id="landingpage" to="/">
                    <Image className="bg-image" src="/images/homeIcon.png" style = {{width: 42,height: 42}} />
               </Link>
            </div>
        )
    }
}



const mapStateToProps = state => ({
    itineraries: state.itineraries.items,
    users: state.users.items
})


export default connect(mapStateToProps, {fetchItineraries, fetchFavorites})(Itinerarypage)