import React, { Component } from 'react'
import Comment from './Comment';

class CommentContainer extends Component {
  constructor(props){
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div>
          <div>
            {this.props.comments.map(comment => (
              <Comment comment={comment} />
            ))}
            
          </div>
      </div>
    )
  }
}

export default CommentContainer;