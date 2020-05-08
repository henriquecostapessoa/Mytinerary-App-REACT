import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchComments} from '../store/actions/commentsActions';
import {deleteComment} from '../store/actions/commentsActions';
import {Card, CardBody, CardTitle}from 'reactstrap' ;

class Comments extends Component {
    state = {
        comments: []
    }

    componentDidMount(){

    const {itineraries} = this.props;

    const {itinerary} = this.props;

    const {activities} = this.props; 

    /* console.log(activities) */

    
    /* this.props.fetchComments(itineraries[0]._id) */
     

    };

    /* fetchComments2(itinerary) {
        fetch(`http://localhost:5000/activities/${itinerary}/comments`)
        .then((response) => response.json())
        .then(CommentsList => {
            this.setState({ comments: CommentsList });
        });
        
    } */

    deleteComment = (_id) => {

        let comment = this.props.comments.map(comment => {
            return (comment)
        })

        let id = comment.id

        this.props.deleteComment(id);
        // console.log(comment)
    }

    getCommentsNumber = () => {

        let commentsNumber = this.props.comments.length;

        return (commentsNumber)
        
    } 

    getComments = () => {


        let commentsList = this.state.comments.map((comment) => {
            return (
                <Card key={comment._id} >
                    <CardBody className="mainContainer">
                        <div className="userContainer">
                            <img className="avatar" src={comment.user.picture}  alt="user avatar profile" />
                            <CardTitle className="userData"><strong>{comment.user.username + ' '}</strong></CardTitle>
                        </div>
                        <div className="commentContainer">
                            {/* {comment.body} */}
                            <div>
                            <small className="text-muted">Comment posted by {comment.user.username} on {comment.date}</small>
                            </div>
                        </div>
                        {/* <h5 onClick={this.deleteComment.bind(this)}>Delete</h5> */}
                    </CardBody>
                </Card>
            )
            
        })

        if(commentsList.length === 0){
            commentsList =(
                <p>No comments added yet</p>
            )
        }
        return commentsList 
    }


    render() {
        
        
        return (
            <div className="commentsList">
                <h5>Comments({this.getCommentsNumber()})</h5>
                {this.getComments()}
            </div>
        )
    };

    
}
const mapStateToProps = (state) => {
    return {
        comments: state.comments,
        itineraries: state.itineraries.items,
        user: state.login.user,
        activities: state.activities.items
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchComments: (itinerary) => dispatch(fetchComments(itinerary)),
        deleteComment: (comment) => dispatch(deleteComment(comment)),
        
    }
        
}

export default connect (mapStateToProps, mapDispatchToProps) (Comments);