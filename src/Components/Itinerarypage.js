import React, { Component } from 'react'
import { fetchItineraries } from '../store/actions/itineraryActions';
import { connect } from 'react-redux'

class Itinerarypage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          datain: false,  
          itineraries: []
          
        };
      }

      componentDidMount() {
        this.props.fetchItineraries(this.props.location.state.city._id)
    }

   

    render() {
        
      const itineraries = this.props.itineraries.map(itinerary => {
      return <h1>{itinerary.title}</h1>
      })
        
        return (
            <div>
                <p>Itinerary</p>
               {itineraries}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    itineraries: state.itineraries.items
})

export default connect(mapStateToProps, {fetchItineraries})(Itinerarypage)