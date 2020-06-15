import React, { Component } from 'react';
import { fetchItineraries } from '../store/actions/itineraryActions';
import { deletefavorite } from '../store/actions/loginActions';
import { addfavorite } from '../store/actions/loginActions';
import { connect } from 'react-redux';
import { Link } from "react-router-dom"
import { Button, Accordion, Image, Card } from 'react-bootstrap';
import Activitiespage from './Activitiespage';
import ActivityForm from './ActivityForm';
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import CommentForm from './CommentForm';
import Comments from './Comments';


class Itinerarypage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          datain: false,  
          itineraries: [],
          id: "",
          liked: [],
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
        
        if(this.props.location.state !== undefined){
          this.setState({cityId: this.props.location.state.city._id})
        this.props.fetchItineraries(this.props.location.state.city._id)
        } else {
          this.setState({cityId: this.props.itineraries[0].cityId})
        this.props.fetchItineraries(this.props.itineraries[0].cityId)
        }
        
    }

    handleClick(myId) {
      this.setState({
        id: myId,
      })
      
    }

    handClick(itinerary) {

      const favorites = this.props.user.favourites

      const result = favorites.filter(fav=> fav.itineraryId === itinerary._id)
    
    
    if(result.length > 0) {
      this.deleteClick(itinerary)
    } else if(result.length === 0) {
      this.addClick(itinerary)
    }

    
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
       
        this.props.addfavorite (newfavorite) 
        
    }

    deleteClick(itinerary) {
    
      
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
      
      
     if(this.props.user !== undefined) {
      this.props.user.favourites.forEach(fav => this.state.liked.push(fav.itineraryId))
      } 
      
      const pStyle = {
        margin: 10
      }  
      const hStyle = {
        marginLeft: 10
      }
      
      
      const itineraries = this.props.itineraries.map((itinerary, index) => {
      let label = <FavoriteIcon color="primary" />

      let text = 'have';

      if(this.state.liked.includes(itinerary._id)){
        text = "have like"} else {text = "haven´t like"}
      
      if(this.state.liked.includes(itinerary._id)){
      label = <FavoriteIcon color="primary" />} else {label = <FavoriteBorder color="primary" />}
console.log(this.state.id)
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
            
              <Card.Header>
                <Accordion.Toggle id="activitiesBtn" as={Button} onClick={() => this.handleClick(itinerary._id)} variant="link"  eventKey="1">
                  Activities
                </Accordion.Toggle>
              </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    {this.state.id === itinerary._id && <Activitiespage myid={itinerary._id}/>}
                    <div>
                      <a href={itinerary.map}>Itinerary Map (click here)</a>
                      <br></br>
                      <br></br>
                      <div>
                      {this.state.id === itinerary._id && <ActivityForm myid={itinerary._id}/>}
                      </div>
                    </div><br></br>
                    {this.state.id === itinerary._id && <Comments idcomment={itinerary._id}/>}
                    <CommentForm itinerary={itinerary}/>
                    
                  </Card.Body>
                </Accordion.Collapse>
              <Accordion.Toggle id="closeBtn" as={Button} onClick={() => this.handleClick(itinerary._id)} variant="link"  eventKey="1">
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
                <div>
                <Link to="./ItineraryForm">Add an Itinerary...</Link>
                </div><br></br> 
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