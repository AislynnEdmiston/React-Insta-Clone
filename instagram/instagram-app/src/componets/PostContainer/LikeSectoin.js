import React, { Component } from 'react';

export default class LikeSection extends Component {
    constructor(props){
        super(props);
        this.state = {
            likes: props.likes,
            likeToggle: false
        }
    }

    checkLike = ()=>{
        if (this.state.likeToggle === false){
            this.setState({
               likes: this.state.likes + 1,
               likeToggle: true
            })
        }else {
            this.setState({
                likes: this.state.likes - 1,
                likeToggle: false
             })
        }
    }

  render() {
    return (
      <div>
        <div className='post-icon'>
            <i className="far fa-heart icon" onClick={this.checkLike}></i>
            <i className="far fa-comment icon"></i>
        </div>
        <p>{this.state.likes}</p>
      </div>
    )
  }
}