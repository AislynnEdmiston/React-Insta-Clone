import React from 'react';
import Comment from './Comment';


class CommentContainer extends React.Component {
    constructor(props){
    super(props)
    this.state = {
      comments: props.comments,
      text: ''
    }
    console.log(props, 'Here')
  }

  changeHandler =(e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  addNewComment = (e) => {
    e.preventDefault();
    const newComment = {username: "ckc", text: this.state.text}
    console.log('works')
    this.setState({
      comments: [...this.state.comments, newComment],
      text: ''
    })
  }

  render() {
    console.log(this.props);
    return (
      <div>
            {this.state.comments.map((comment, i) => (
              <Comment comment={comment} key={i}/>
            ))}
            <div>
              <form onSubmit={this.addNewComment}>
                <input onChange={this.changeHandler} className='add-comment' name='text' placeholder='Add a comment...' value={this.state.text}/>
              </form>
            </div>
      </div>
    )
  }
}

export default CommentContainer;


