import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SinglePost from '../SinglePost/SinglePost';

const Posts = () => {
     const posts = useLoaderData();
     console.log(posts)
     return (
          <div>
               <h1>There is a single post:{posts.length}</h1>
               <div>
                    {
                         posts.map(post=><SinglePost
                         key={post.id}
                         post={post}
                         ></SinglePost>)
                    }
               </div>
          </div>
     );
};

export default Posts;