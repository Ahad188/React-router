import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/About/About';
import Contack from './components/Contack/Contack';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import First from './components/First/First';
import Friends from './components/Friends/Friends';
import FriendDitails from './components/FriendDitails/FriendDitails';
import Posts from './components/Posts/Posts';
 

 const router = createBrowserRouter([
     {
          path:'/',
          element: <Home></Home>,
          children:[
               {
                    path:'/',
                    element:<First></First>
               },
               {
                    path:'/friends',
                    element:<Friends></Friends>,
                    loader:()=> fetch('https://jsonplaceholder.typicode.com/users')
                    
               },
               {
                    path:'/friend/:friendId',
                    element:<FriendDitails></FriendDitails>,
                    loader:(({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`))
               },
               {
                    path:'/about',
                    element:<About></About>
               },
               {
                    path:'/contact',
                    element:<Contack></Contack>,
               },
               {
                    path:'/posts',
                    element:<Posts></Posts>,
                    loader:()=>fetch('https://jsonplaceholder.typicode.com/posts')
               },
               {
                    path:'*',
                    element:<div>there is a error page238973985739580</div>
               }
               
          ]
     }
 ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
      <App></App>
  </React.StrictMode>,
)
