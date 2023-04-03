import React from 'react';
import './Friend.css'
import { Link } from 'react-router-dom';
const Friend = ({friend}) => {
     const {id,name, email} = friend;
     return (
          <div className='friend'>
               <span>id:{id}</span>
               <h4>name:{name}</h4>
               <h5>Email:{email}</h5>
               <p><Link to={`/friend/${id}`}>Show More</Link></p>
          </div>
     );
};

export default Friend;