import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css'
import Active from '../Active/Active';
const Header = () => {
     return (
          <nav>
               <Link to ="/">Home</Link>
               <Active to='/friends'>Friends</Active>
               <Link to ="/contact">Contact</Link>
               <Link to ="/about">About</Link>
               <Link to ="/posts">Posts</Link>
               
          </nav>
     );
};

export default Header;