import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchComments} from '../store/actions/commentsActions';
import {deleteComment} from '../store/actions/commentsActions';
import {Card, CardBody, CardTitle}from 'reactstrap' ;
import {updateComment} from '../store/actions/commentsActions';

class Comments extends Component {
    state = {
        comments: [],
        text:""
    }

    componentDidMount() {

        this.props.fetchComments(this.props.idcomment)
    }

    onChange = (e) => {
        this.setState({
          text: e.target.value,
        });
        console.log(this.state.text)
      };

    updateComment = (id) => {
        
        const text = this.state.text;
                           
        this.props.updateComment(text, id)
            
    
            }

    deleteComment = (id) => {

        this.props.deleteComment(id)
    
    }

    getCommentsNumber = () => {

        let commentsNumber = this.props.comments.length;

        return (commentsNumber)
        
    } 
    
        

    render() {
        
        
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
                        <h5 id="labelHeader" onClick={() => this.deleteComment(comment._id)}>Delete Comment</h5> : console.log("no")}
                        <textarea rows="4" cols="30" name="comment2" form="usrform" defaultValue={comment.text} onChange={this.onChange}>
                             </textarea>
                        {(comment.author === this.props.user._id) ?
                        <h5 id="labelHeader2" onClick={() => this.updateComment(comment._id)}>Update Comment</h5> : console.log("no")}
                    </CardBody>
                </Card>
            )
            

        })} else {commentsList =(<p>No comments added yet</p>)}
        
         

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
        updateComment : (id, text) => dispatch(updateComment(id, text))
        
    }
        
}

export default connect (mapStateToProps, mapDispatchToProps) (Comments);