import React from 'react';

export default function Comment(props) {
  return (
    <div>
        <p><span className='bold'>{`${props.comment.username}`}</span> {`${props.comment.text}`}</p>
    </div>
  )
}