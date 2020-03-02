import React, { Component } from 'react'
import { fetchActivities } from '../store/actions/activitiesActions';
import { connect } from 'react-redux'
import {Navbar, Nav, NavDropdown, Overlay, Tooltip, Image, Carousel} from 'react-bootstrap'

class Activitiespage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          datain: false,  
          activities: []
          
        };
      }

    componentDidMount() {
        /* this.props.fetchActivities(this.props.location.state.itinerary._id) */
    }

    render() {
        
        const pictures = this.state.activities.map(activity => {
            return (
                <div className="carousel">
                <Carousel>
                <Carousel.Item>
                    <div style={{display: 'flex', flexWrap: 'wrap'}}>
                        <Image
                        className="d-block w-50"
                        src={activity.picture[0]}
                        alt="Third slide"
                        thumbnail
                        style={{width: 150, height: 125}} 
                        />
                        <Image
                        className="d-block w-50"
                        src={activity.picture[1]}                            
                        alt="Third slide"
                        thumbnail
                        style={{width: 150, height: 125}}  
                        />
                    
                    </div>
                </Carousel.Item>
                </Carousel>
                </div> 
            )
        })



        return (
            <div>
              <h1>activities</h1>
              {/*   {pictures} */}
            </div>

        )
    }
}

const mapStateToProps = state => ({
    activities: state.activities.items
})

export default connect(mapStateToProps, {fetchActivities})(Activitiespage)