import React, { Component } from 'react'
import {connect} from "react-redux"
import { Form, Button, Label, Input } from 'reactstrap';
import { additinerary } from '../store/actions/itineraryActions';

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

   
      onChange(e) {
          
          this.setState({[e.target.name]: e.target.value})
          
      }

      handleClick(e, cityid) {
        e.preventDefault()
        
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
        
      }

    render() {
        return (
            <div>
                <div>
                <Form.Group onSubmit={this.handleClick}>
                <Label for="exampleText">Share your Itinerary...</Label>
                    <Input type="text" value={this.state.title} placeholder="Title" onChange={this.onChange}/>
                    <br />
                    <Input type="text" value={this.state.rating} placeholder="Rating e.g.: 4/5" onChange={this.onChange}/>
                    <br />
                    <Input type="text" value={this.state.duration} placeholder="Duration e.g.: 7 days" onChange={this.onChange}/>
                    <br />
                    <Input type="text" value={this.state.price} placeholder="Price" onChange={this.onChange}/>
                    <br />
                    <Input type="text" value={this.state.hashtags} placeholder="Hashtags" onChange={this.onChange}/>
                    <br />
                    <Input type="text" value={this.state.profilepicture} placeholder="Profile Picture" onChange={this.onChange} />
                    <br />
                    <Input type="text" value={this.state.map} placeholder="Itinerary Map" onChange={this.onChange} />
                    <br />
                    <Button variant="secondary">Submit</Button>{' '}
                </Form.Group>
                    
                </div>
            </div>
        )
    }
}

export default connect(additinerary)(ItineraryForm) 
