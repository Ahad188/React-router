import React from 'react';
import './SinglePost.css'
const SinglePost = ({post}) => {
     console.log(post)
     const {title,body}=post;
     return (
          <div className='post'>
               <h2>{title}</h2>
               <p>{body}</p>
          </div>
     );
};

export default SinglePost;