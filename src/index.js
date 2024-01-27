import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./tailwind.css";
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import TaxAndBilling from './pages/TaxAndBilling/TaxAndBilling';
import Home from './pages/Home/Home';

import { useNavigate } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'
import BillGeneration from './pages/TaxAndBilling/BillLayout/BillGeneration';
import RandM from './pages/RandM/RandM';
import { useState } from 'react';
import Login from './pages/login/login';
import Register from './pages/login/register';
import Expenses from './pages/Expenses/Expenses';



const DefaultRedirect = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    navigate('/Login');
  }, [navigate]);

  return null;
};



const router = createBrowserRouter([

  {
    path: "/home",
    element: <Home/>,
  },
  {
    path: "/Login",
    element: <Login/>,
  },
  {
    path: "/dashboard",
    element: <Expenses/>,
  },


  {
    path: "/customers",
    element:<TaxAndBilling/>,
  },
  {
   path:"/customers/billGeneration",
   element:<BillGeneration/>
  },
  {
    path: "*",
    element: <DefaultRedirect />,
  },

  {
    path:'/R&M',
    element:<RandM/>
  },
  {
    path:'/register',
    element:<Register/>
  }
  
  
   
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);


reportWebVitals();
