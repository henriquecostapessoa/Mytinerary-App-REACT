import React, { Component } from 'react';
import { Form, Button, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import {postComment} from '../store/actions/commentsActions';
import {fetchComments} from '../store/actions/commentsActions';


class CommentForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            text: '',
            itineraryId: "",
            author:"",
            date:"",
            username: "",
            img:"",
            id:"",
            modal: false
            
        };
    }

    componentDidMount() {
        
        this.props.fetchComments(this.props.idcomment)
    }
    
    toggle = () => {
        this.setState({
          modal: !this.state.modal,
        });
      };
      onChange = (e) => {
        this.setState({
          text: e.target.value,
        });
        console.log(this.state.text)
      };
      onSubmit = (id) => {
        const text = this.state.text;
        console.log("message: ", text);
        this.props.postComment(text, id);
      
      };

    render() {
        const itinerary = this.props.itinerary
        return (

            <div>
                <Form onClick={() => this.onSubmit(itinerary._id)}>
                    <FormGroup className='formContainer'>
                        <Label for="exampleText">Do you want to share your experience?</Label>
                        <Input type="textarea" name="text"
                    id="comments" placeholder="Your text" onChange={this.onChange}/><br></br>
                        <Button color="secondary" size="lg" onClick={this.toggle}>Submit</Button>
                    </FormGroup>    
                </Form>  
            </div>
        )
    }
}

const mapStateToProps = state => ({
    comments: state.comments.items,
    itineraries: state.itineraries.items,
    user: state.login.user,
    activities: state.activities.items
})

const mapDispatchtoProps = (dispatch) => {
    return {
        postComment : (id, text) => dispatch(postComment(id, text)),
        fetchComments: (id) => dispatch(fetchComments(id))
    }
}

export default  connect (mapStateToProps, mapDispatchtoProps) (CommentForm); 