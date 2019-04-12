import React from 'react';
import LikeSection from './LikeSectoin';
import CommentContainer from './CommentContainer/CommentContainer';


export default function Post(props) {
  return (
    <div>
        <div className ='post-header'>
            <div className='user-icon-container'>
                <img className='user-icon' src={props.post.thumbnailUrl} alt='User icon' />
            </div>
            <h2 className='username'>{props.post.username}</h2>
        </div>
        <div className='post-content'>
            <div className='img-container'>
                <img className='post-img' src={props.post.imageUrl} alt='User post'/>
            </div>
            <div>
                <LikeSection likes={props.post.likes}/>
            </div>
            <div className='comment-section'>
                <CommentContainer comments={props.post.comments}/>
            </div>
        </div>
    </div>
  )
}
