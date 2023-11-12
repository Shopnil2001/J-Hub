import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root.jsx';
import ErrorPage from './Components/ErrorPage.jsx';
import Home from './Components/Home.jsx';
import AuthProvider from './Components/AuthProvider.jsx';
import Login from './Components/Login.jsx';
import Register from './Components/Register.jsx';
import AllJobs from './Components/AllJobs.jsx';
import JobDetails from './Components/JobDetails.jsx';
import AppliedJobs from './Components/AppliedJobs.jsx';
import AddJob from './Components/AddJob.jsx';
import Update from './Components/Update.jsx';
import MyJobs from './Components/MyJobs.jsx';
import PrivateRout from './Components/PrivateRout.jsx';
import Blog from './Components/Blog.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path:"/Login",
        element:<Login></Login>,
        
        
      },
      {
        path:"/Register",
        element:<Register></Register>
      },
      {
        path:"/AllJob",
        element:<AllJobs></AllJobs>,
        loader: ()=>fetch(' https://assignment-11-server-mu-six.vercel.app/jobs')
      },
      {
        path:"/JobDetails/:_id",
        element:<PrivateRout><JobDetails></JobDetails></PrivateRout>,
        loader: ({params})=>fetch(`https://assignment-11-server-mu-six.vercel.app/jobs/${params._id}`)
      },
      {
        path:"/Update/:_id",
        element:<PrivateRout><Update></Update></PrivateRout>,
        loader: ({params})=>fetch(`https://assignment-11-server-mu-six.vercel.app/jobs/${params._id}`)
      },
      {
        path:"/Applied",
        element:<PrivateRout><AppliedJobs></AppliedJobs></PrivateRout>,
        
      },
      {
        path:"/AddJob",
        element:<PrivateRout><AddJob></AddJob></PrivateRout>,
        
      },
      {
        path:"/MyJob",
        element:<PrivateRout><MyJobs></MyJobs></PrivateRout>,
        
      },
      {
        path:"/Blog",
        element:<Blog></Blog>,
        
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
     <RouterProvider router={router} />
     </AuthProvider>
  </React.StrictMode>,
)
