import React from 'react';
import './Active.css';
import { NavLink } from 'react-router-dom';
const Active = ({to,children}) => {
     return (
          <div>
                <NavLink
                    to={to}
                    className={({ isActive}) =>isActive? "active": ""
                    }
                  >
                    {children}
                  </NavLink>
          </div>
     );
};

export default Active;