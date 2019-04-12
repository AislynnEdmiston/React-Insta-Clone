import React from 'react';
import Post from './Post';
import './PostContainer.css'

const PostContainer = props => {
  return (
    <div>
        <div className='post-container'>
          {props.posts.map(post => <Post key={post.imageUrl} post={post}/>)}
        </div>
    </div>
  )
}
export default PostContainer;