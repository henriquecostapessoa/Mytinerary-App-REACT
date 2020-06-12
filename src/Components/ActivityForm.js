import React, { Component } from 'react'
import {connect} from "react-redux"
import { Form } from 'react-bootstrap';
import { Input, Label, Button } from 'reactstrap';

import { addactivity } from '../store/actions/activitiesActions';
import { fetchItineraries } from '../store/actions/itineraryActions';

class ActivityForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          itineraryid:"",  
          title:"",
          picture:"" 
        };
        this.onChange = this.onChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
      }

componentDidMount(){

        this.setState({itineraryid: this.props.activities[0].itineraryId})

}
   
      onChange(e) {
          
          this.setState({[e.target.name]: e.target.value})
          
      }

      handleClick(e) {
        e.preventDefault()
        const itineraryid = this.state.itineraryid
        const title = this.state.title
        const picture = this.state.picture
        const newActivity = {
            title: title,
            picture: picture
        }
       
        this.props.addactivity(newActivity, itineraryid)
        this.props.history.push('/citiespage')
      }

    render() {
       console.log(this.props.itineraries)
        return (


                
                <Form onSubmit={this.handleClick}>
                <Label className="">Share your Activity...(Max. 4 pictures)</Label>
                    <Input className="formiti" type="text" name="title" value={this.state.title} placeholder="Title" onChange={this.onChange}></Input>
                    <br />
                    <Input className="formiti" type="text" name="picture" value={this.state.picture} placeholder="Activity Picture" onChange={this.onChange}></Input>
                    <br />
                    <Button className="SubBtn" variant="secondary">Submit</Button>{' '}
                </Form>
                    
                

            
        )
    }
}
const mapStateToProps = state => ({
    activities: state.activities.items,
    itineraries: state.itineraries.items
})

export default connect(mapStateToProps, {fetchItineraries, addactivity})(ActivityForm) 