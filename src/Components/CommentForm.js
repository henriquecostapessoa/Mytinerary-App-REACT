import React, { Component } from 'react';
import { Form, Button, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import {postComment} from '../store/actions/commentsActions';
import {fetchComments} from '../store/actions/commentsActions';


class CommentForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            body: '',
        };
    }

    componentDidMount(){
        //const {itinerary} = this.props

        //console.log(this.props)

        // let date = new Date ();
        
        // console.log(date)
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    async onSubmit (e) {

        e.preventDefault();

        const {user} = this.props
        
        const {itineraries} = this.props;

        const {activities} = this.props
        
        console.log(this.props)
        const author = user._id;
        
        const {body} = this.state;

        let date = new Date();
        
        for(var i = 0; i < itineraries.length; i++){
            var xpto = itineraries[i]._id
            if(activities[0].itineraryId === xpto ){
                var itineraryId = xpto
            }
        }
        const newComment = {
            author,
            itineraryId,
            body,
            date
        }

        console.log(newComment)
        console.log(itineraryId)
    
        // Attempt to post a new comment
        await this.props.postComment(newComment);


        /* if(await this.props.fetchComments(itineraries)){
            this.props.itineraries.push().comments
        };  */
        
    }


    render() {
        return (
            <div>
                <Form onSubmit={(e) => this.onSubmit(e)}>
                    <FormGroup className='formContainer'>
                        <Label for="exampleText">Do you want to share your experience?</Label>
                        <Input type="textarea" name="body" id="body" placeholder="Your text" onChange={this.onChange}/><br></br>
                        <Button color="secondary" size="lg">Submit</Button>
                    </FormGroup>    
                </Form>      
            </div>
        )
    }
}

const mapStateToProps = state => ({
    itineraries: state.itineraries.items,
    user: state.login.user,
    activities: state.activities.items
})

const mapDispatchtoProps = (dispatch) => {
    return {
        postComment : (newComment) => dispatch(postComment(newComment)),
        fetchComments: (itinerary) => dispatch(fetchComments(itinerary))
    }
}

export default  connect (mapStateToProps, mapDispatchtoProps) (CommentForm); 