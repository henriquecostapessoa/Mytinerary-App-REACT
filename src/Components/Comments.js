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


    deleteComment = (_id) => {

        let comment = this.props.comments.map(comment => {
            return (comment)
        })

        let id = comment.id

        if(this.props.comments.length > 0 && this.props.comments !== undefined){
            for(var i = 0; i < this.props.comments.length; i++){ 
            if(this.props.user._id === this.props.comments[i].author){
                return this.props.deleteComment(id)
            } else {return "You can´t delete this comment!"}
        } 
    }

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
        console.log(this.props)
        let label;
        if(this.props.comments.length > 0 && this.props.comments !== undefined){
            for(var i = 0; i < this.props.comments.length; i++){ 
            if(this.props.user._id === this.props.comments[i].author){
                label = "Delete"
            } else {label = ""}
        }} 
        
        console.log(this.props.user._id)
        console.log(this.props.comments)
        
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
                        <h5 onClick={this.deleteComment.bind(this)}>{label}</h5>
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