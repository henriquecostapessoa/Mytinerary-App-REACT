import React, { Component } from 'react'
import {connect} from "react-redux"
import { Form } from 'react-bootstrap';
import { Input, Label, Button } from 'reactstrap';

import { additinerary } from '../store/actions/itineraryActions';
import { fetchItineraries } from '../store/actions/itineraryActions';

class ItineraryForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          cityid:"",  
          title:"",
          rating:"",
          duration:"",
          price:"",
          hashtags:"",
          profilepicture:"",
          map:""
        };
        this.onChange = this.onChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
      }

componentDidMount(){

        this.setState({cityid: this.props.itineraries[0].cityId})

}
   
      onChange(e) {
          
          this.setState({[e.target.name]: e.target.value})
          
      }

      handleClick(e) {
        e.preventDefault()
        const cityid = this.state.cityid
        const title = this.state.title
        const rating = this.state.rating
        const duration = this.state.duration
        const price = this.state.price
        const hashtags = this.state.hashtags
        const profilepicture = this.state.profilepicture
        const map = this.state.map
        const newItinerary = {
            title: title,
            rating: rating,
            duration: duration,
            price: price,
            hashtags: hashtags,
            profilepicture: profilepicture,
            map: map
        }
       
        this.props.additinerary(newItinerary, cityid)
        this.props.history.push('/citiespage')
      }

    render() {
       console.log(this.state.cityid)
        return (


                
                <Form onSubmit={this.handleClick}>
                <Label className="share">Share your Itinerary...</Label>
                    <Input className="formiti" type="text" name="title" value={this.state.title} placeholder="Title" onChange={this.onChange}></Input>
                    <br />
                    <Input className="formiti" type="text" name="rating" value={this.state.rating} placeholder="Rating e.g.: 4/5" onChange={this.onChange}></Input>
                    <br />
                    <Input className="formiti" type="text" name="duration" value={this.state.duration} placeholder="Duration e.g.: 7 days" onChange={this.onChange}></Input>
                    <br />
                    <Input className="formiti" type="text" name="price" value={this.state.price} placeholder="Price" onChange={this.onChange}></Input>
                    <br />
                    <Input className="formiti" type="text" name="hashtags" value={this.state.hashtags} placeholder="Hashtags" onChange={this.onChange}></Input>
                    <br />
                    <Input className="formiti" type="text" name="profilepicture" value={this.state.profilepicture} placeholder="Profile Picture" onChange={this.onChange}></Input>
                    <br />
                    <Input className="formiti" type="text" name="map" value={this.state.map} placeholder="Google Map Locations" onChange={this.onChange}></Input>
                    <br />
                    <Button className="SubBtn" variant="secondary">Submit</Button>{' '}
                </Form>
                    
                

            
        )
    }
}
const mapStateToProps = state => ({
    itineraries: state.itineraries.items,
    
})

export default connect(mapStateToProps, {fetchItineraries, additinerary})(ItineraryForm) 
