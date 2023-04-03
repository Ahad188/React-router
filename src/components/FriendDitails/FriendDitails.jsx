import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import './FriendDitails.css'
const FriendDitails = () => {
     const friend = useLoaderData();
     const {name,phone,email} = friend;
     // console.log(friend)
     const navi = useNavigate()
     const handelGo=()=>{
          navi(-1);
     }
     return (
          <div>
               <h3>Single friend Details</h3>
               <div className='fr'>
                    <h4>{name}</h4>
                    <h3>{phone}</h3>
                    <p>{email}</p>
                    <button onClick={handelGo}>Goback</button>
               </div>
          </div>
     );
};

export default FriendDitails;