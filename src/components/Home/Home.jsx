import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../Header/Header';

const Home = () => {
     const navig = useNavigation();
     return (
          <div>
               <Header></Header>
               <div>{navig.state}</div>
               <Outlet></Outlet>
          </div>
     );
};

export default Home;