import { createBrowserRouter } from "react-router-dom";
import ServiceDetails from "./components/Services/ServiceDetails";
import Main from "./layout/Main";
import Home from "./components/Home/Home";
import Admin from "./components/Admin/Admin";
import Dashboard from "./components/Dashboard/Dashboard";
import AboutUs from "./components/AboutUs/AboutUs";

export const route = createBrowserRouter([
    {
        path: "/",
        element:<Main/>,
        children:[
            {
                path: "/",
                element:<Home/>
            },
            {
                path:'/serviceDetail',
                element:<ServiceDetails/>

            },
            {
                path: '/dashboard',
                element:<Dashboard/>
            },
            {
                path: '/about',
                element:<AboutUs/>
            }
        ]
    }
])