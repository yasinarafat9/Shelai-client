import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../pages/Home/Home';
import Dashboard from '../layouts/Dashboard';
import Login from '../pages/LoginRegister/Login';
import Register from '../pages/LoginRegister/Register';
import Men from '../layouts/Men';
import Jeans from '../pages/Man/Jeans';
import ViewDetails from '../pages/Man/ViewDetails';
import Cart from '../pages/Dashboard/Cart';
import Address from '../pages/Man/Address';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'men',
                element: <Men></Men>,
                children: [
                    {
                        path: "jeans",
                        element: <Jeans></Jeans>
                    },
                    {
                        path: 'viewDetails/:id',
                        element: <ViewDetails></ViewDetails>,
                        loader: () => fetch(`/pants.json`)
                    },
                    {
                        path: 'address',
                        element: <Address></Address>
                    }
                ]
            }
        ],


    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'cart',
                element: <Cart></Cart>
            }
        ]
    }
]);


export default router;