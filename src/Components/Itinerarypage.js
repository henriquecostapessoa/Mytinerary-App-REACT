import React, { Component } from 'react';
import { fetchItineraries } from '../store/actions/itineraryActions';
import { deletefavorite } from '../store/actions/loginActions';
import { addfavorite } from '../store/actions/loginActions';
import { connect } from 'react-redux';
import { Link } from "react-router-dom"
import { Button, Accordion, Image, Card } from 'react-bootstrap';
import Activitiespage from './Activitiespage';
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";


class Itinerarypage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          datain: false,  
          itineraries: [],
          id: "",
          liked: false,
          itineraryId: "",
          title:"",
          cityId:""
        };
        this.handClick = this.handClick.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.deleteClick = this.deleteClick.bind(this);
        this.addClick = this.addClick.bind(this);
      }


      componentDidMount() {
        this.props.fetchItineraries(this.props.location.state.city._id)
    }

    handleClick(myId) {
      this.setState({
        id: myId,
      })
      
    }
    handClick(itinerary) {
      
      this.setState({
      
        liked: !this.state.liked,
        
      }) 
       
    const favorites = this.props.user.favourites
    
    let result = favorites.filter(fav=> fav.itineraryId === itinerary._id)
    
    /* const itineraries = this.props.itineraries */
    
    if(result.length > 0) {
      this.deleteClick(itinerary)
    } else if(result.length === 0) {
      this.addClick(itinerary)
    }
    console.log(result)
    }

    addClick(itinerary) {
    
        console.log(itinerary)
        const itineraryId = itinerary._id
        const title = itinerary.title
        const cityId = itinerary.cityId
        const newfavorite = {
            itineraryId: itineraryId,
            title: title,
            cityId: cityId
        }
       console.log(newfavorite)
        this.props.addfavorite (newfavorite) 
        
    }

    deleteClick(itinerary) {
    
        console.log(itinerary)
        const itineraryId = itinerary._id
        const title = itinerary.title
        const cityId = itinerary.cityId
        const deletefavorite = {
            itineraryId: itineraryId,
            title: title,
            cityId: cityId
        }
       
        this.props.deletefavorite (deletefavorite)
    }

    
    render() {
      console.log(this.props.user)
      const pStyle = {
        margin: 10
      }  
      const hStyle = {
        marginLeft: 10
      }

      const text = this.state.liked ? 'liked' : 'haven\'t liked';
      const label = this.state.liked ? <FavoriteIcon color="primary" /> : <FavoriteBorder color="primary" />
      const itineraries = this.props.itineraries.map((itinerary, index) => {
      
      return (
      <Card key={index}>
        <Card.Body>
          <div className="flex-container" >
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
                <p style={hStyle} key={itinerary.hashtags}>{itinerary.hashtags}</p>
              <div className="customContainer">
                <button className="btn" onClick={() => this.handClick(itinerary)}>
                  {label}</button>
                <p>
                you {text} this. Click to toggle.
                </p>
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
    user: state.login.user
})



export default connect(mapStateToProps, {fetchItineraries, deletefavorite, addfavorite})(Itinerarypage)