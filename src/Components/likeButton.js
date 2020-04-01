import React, { Component } from 'react'
import FavoriteIcon from "@material-ui/icons/Favorite"
import FavoriteBorder from "@material-ui/icons/FavoriteBorder"
import { connect } from 'react-redux'
import { fetchFavorites } from '../store/actions/likeButtonActions';
export default class likeButton extends Component {
        constructor() {
          super();
          this.state = {
            liked: false,
          };
          this.handleClick = this.handleClick.bind(this);
        } 
    
        handleClick() {
          this.setState({
            liked: !this.state.liked,
          });
        }
        
        render() {
          const text = this.state.liked ? 'liked' : 'haven\'t liked';
          const label = this.state.liked ? <FavoriteIcon color="primary" /> : <FavoriteBorder color="primary" />
    
          return (
            <div className="customContainer">
              <button className="btn" onClick={this.handleClick}>
                {label}</button>
              <p>
                you {text} this. Click to toggle.
              </p>
            </div>
          );
    
        }
      }


