import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchComments} from '../store/actions/commentsActions';
import {deleteComment} from '../store/actions/commentsActions';
import {Card, CardBody, CardTitle}from 'reactstrap' ;

class Comments extends Component {
    state = {
        comments: []
    }

    componentDidMount() {

        console.log(this.props)
        this.props.fetchComments(this.props.idcomment)
    }


    deleteComment = () => {
console.log("delete")
        this.props.comments.map(comment => {
            console.log(comment._id)
            this.props.deleteComment(comment._id)
        })

        // console.log(comment)
    }

    getCommentsNumber = () => {

        let commentsNumber = this.props.comments.length;

        return (commentsNumber)
        
    } 


        /* if(commentsList.length === 0){
            commentsList =(
                <p>No comments added yet</p>
            )
        }
        return commentsList  */
    
        

    render() {
        
        
        console.log(this.props.user._id)
        
        
        let commentsList;
        if(this.props.comments.length > 0) {commentsList = this.props.comments.map((comment) => {
            return (
                <Card key={comment._id} >
                    <CardBody className="mainContainer">
                        <div className="userContainer">
                            <img className="avatar" src={comment.img}  alt="user avatar profile" />
                            <CardTitle className="userData"><strong>{comment.username + ' '}</strong></CardTitle>
                        </div>
                        <div>
                            <p>{comment.text}</p>
                        </div>
                        <div className="commentContainer">
                            <div>
                            <small className="text-muted">Comment posted by {comment.username} on {comment.date}</small>
                            </div>
                        </div>
                        {(comment.author === this.props.user._id) ? 
                        <h5 id="labelHeader" onClick={this.deleteComment.bind(this)}>Delete</h5> : console.log("no")}
                        
                    </CardBody>
                </Card>
            )
            
        })}
        
        return (
            <div className="commentsList">
                <h5>Comments({this.getCommentsNumber()})</h5>
                 {commentsList}
            </div>
        )
    };

    
}
const mapStateToProps = (state) => {
    return {
        itineraries: state.itineraries.items,
        user: state.login.user,
        activities: state.activities.items,
        comments: state.comments.items
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchComments: (id) => dispatch(fetchComments(id)),
        deleteComment: (comment) => dispatch(deleteComment(comment)),
        
    }
        
}

export default connect (mapStateToProps, mapDispatchToProps) (Comments);