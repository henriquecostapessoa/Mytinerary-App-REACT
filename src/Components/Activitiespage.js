import React, { Component } from 'react'
import { fetchActivities } from '../store/actions/activitiesActions';
import { connect } from 'react-redux'
import {Navbar, Nav, NavDropdown, Overlay, Tooltip, Image, Carousel, Card} from 'react-bootstrap'

class Activitiespage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          datain: false,  
          activities: []
          
        };
      }

    componentWillMount() {
        this.props.fetchActivities(this.props.myid)
    }



    render() {
        let myCar = null;
if (this.props.activities.length > 0) {
myCar = (
            <Carousel>
                <Carousel.Item>
                    <div style={{display: 'flex', flexWrap: 'wrap'}}>
                    <Card id="allCard" className="bg-dark text-white" >
                    <Card.Img src={this.props.activities[0].picture} alt="Card image" style={{width: 358, height: 225}} />
                    <Card.ImgOverlay>
                        <Card.Title id="cityName">
                        
                        <p id="cityColor"> {this.props.activities[0].title}</p> 
                        </Card.Title>
                    
                    </Card.ImgOverlay>
                    </Card>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{display: 'flex', flexWrap: 'wrap'}}>
                    <Card id="allCard" className="bg-dark text-white" >
                    <Card.Img src={this.props.activities[1].picture} alt="Card image" style={{width: 358, height: 225}} />
                    <Card.ImgOverlay>
                        <Card.Title id="cityName">
                        
                        <p id="cityColor"> {this.props.activities[1].title}</p> 
                        </Card.Title>
                    
                    </Card.ImgOverlay>
                    </Card>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{display: 'flex', flexWrap: 'wrap'}}>
                    <Card id="allCard" className="bg-dark text-white" >
                    <Card.Img src={this.props.activities[2].picture} alt="Card image" style={{width: 358, height: 225}} />
                    <Card.ImgOverlay>
                        <Card.Title id="cityName">
                        
                        <p id="cityColor"> {this.props.activities[2].title}</p> 
                        </Card.Title>
                    
                    </Card.ImgOverlay>
                    </Card>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{display: 'flex', flexWrap: 'wrap'}}>
                    <Card id="allCard" className="bg-dark text-white" >
                    <Card.Img src={this.props.activities[3].picture} alt="Card image" style={{width: 358, height: 225}} />
                    <Card.ImgOverlay>
                        <Card.Title id="cityName">
                        
                        <p id="cityColor"> {this.props.activities[3].title}</p> 
                        </Card.Title>
                    
                    </Card.ImgOverlay>
                    </Card>
                    </div>
                </Carousel.Item>
                </Carousel>
)    
}

        return (
            <div>
              <div className="carousel">
                {myCar}
                </div><br></br>
                <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                    Comments
                    </label><br></br>
                    <input type="text" placeholder="Your comment..." ref={(input) => this.input = input} />
                    <input type="submit" value="Submit" />
                </form>
                </div> 
            </div>

        )
    }
}

const mapStateToProps = state => ({
    activities: state.activities.items
})

export default connect(mapStateToProps, {fetchActivities})(Activitiespage)