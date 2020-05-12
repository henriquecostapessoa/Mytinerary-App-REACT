import React, { Component } from 'react';
import { fetchActivities } from '../store/actions/activitiesActions';
import { connect } from 'react-redux';
import { Carousel, Card} from 'react-bootstrap';
import CommentForm from './CommentForm';
import Comments from './Comments';
import {fetchComments} from '../store/actions/commentsActions';
import { Form, Button, FormGroup, Label, Input } from 'reactstrap';


class Activitiespage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          datain: false,  
          activities: [],
          text: ''
        };
        this.MypostComment = this.MypostComment.bind(this)
      }

    componentDidMount() {
        this.props.fetchActivities(this.props.myid)
        /* this.props.fetchComments(this.props.myid) */
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    MypostComment = () => {

        this.setState({
            id: this.props.idcomment
        })

        /* e.preventDefault(); */

        /* const {itineraries} = this.props;

        const {activities} = this.props;

        for(var i = 0; i < itineraries.length; i++){
            var xpto = itineraries[i]._id
            if(activities[0].itineraryId === xpto ){
                var id = activities[0].itineraryId
            }
        }

        
            
            const itineraryId = id, */
            const text = this.state.text
            const id = this.state.id
          console.log(text)
          console.log(this.props.idcomment) 
          
          /* this.props.postComment("5e5684cd34d5fe0a3ce7e7d5", "text"); */
          
        /* this.props.history.push("/citiespage") */
        /* console.log(newComment) */
    
        // Attempt to post a new comment
        

        
        /* await this.props.fetchComments(id)
        return  */
        
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
                <Form onSubmit={() => this.MypostComment()}>
                    <FormGroup className='formContainer'>
                        <Label for="exampleText">Do you want to share your experience?</Label>
                        <Input type="textarea" name="text" id="text" placeholder="Your text" onChange={this.onChange}/><br></br>
                        <Button color="secondary" size="lg">Submit</Button>
                    </FormGroup>    
                </Form>      
                    {/* <CommentForm idcomment={this.props.myid}/> */}
                    <Comments idcomment={this.props.myid}/> 
                    
                </div> 
            </div>

        )
    }
}

const mapStateToProps = state => ({
    activities: state.activities.items,
    comments: state
})



export default connect(mapStateToProps, {fetchActivities, fetchComments})(Activitiespage)