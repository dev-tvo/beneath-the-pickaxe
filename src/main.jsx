import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter, Navigate,
    RouterProvider,
} from "react-router-dom";
import ErrorPage from "./error-page";
import './index.css'
import Items from "./Components/Items/items";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Items/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                path: "/:type",
                element: <Items/>,
                errorElement: <ErrorPage/>
            }
        ]
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
)
