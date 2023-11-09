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
        loader: ()=>fetch(' http://localhost:5000/jobs')
      },
      {
        path:"/JobDetails/:_id",
        element:<JobDetails></JobDetails>,
        loader: ({params})=>fetch(`http://localhost:5000/jobs/${params._id}`)
      },
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
