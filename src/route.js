import { createBrowserRouter } from "react-router-dom";
import ServiceDetails from "./components/Services/ServiceDetails";
import Main from "./layout/Main";
import Home from "./components/Home/Home";

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

            }
        ]
    }
])