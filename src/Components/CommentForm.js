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
            id:""
            
        };
    }

    componentWillMount() {
        
        this.props.fetchComments(this.props.myid)
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    onSubmit (e) {

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
          
          this.props.postComment(id, text);
          
        this.props.history.push("/itinerary")
        /* console.log(newComment) */
    
        // Attempt to post a new comment
        

        
        /* await this.props.fetchComments(id)
        return  */
        
    }


    render() {
        console.log(this.props)
        return (

            <div>
                <Form onSubmit={(e) => this.onSubmit(e)}>
                    <FormGroup className='formContainer'>
                        <Label for="exampleText">Do you want to share your experience?</Label>
                        <Input type="textarea" name="text" id="text" placeholder="Your text" onChange={this.onChange}/><br></br>
                        <Button color="secondary" size="lg">Submit</Button>
                    </FormGroup>    
                </Form>      
            </div>
        )
    }
}

const mapStateToProps = state => ({
    comments: state,
    itineraries: state.itineraries.items,
    user: state.login.user,
    activities: state.activities.items
})

const mapDispatchtoProps = (dispatch) => {
    return {
        postComment : (newComment) => dispatch(postComment(newComment)),
        fetchComments: (id) => dispatch(fetchComments(id))
    }
}

export default  connect (mapStateToProps, mapDispatchtoProps) (CommentForm); 