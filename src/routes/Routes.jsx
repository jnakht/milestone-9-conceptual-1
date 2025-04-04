import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import PrivateRoute from "./PrivateRoute";
import About from "../pages/About";
import RegisterRecap from "../pages/RegisterRecap";
import LoginRecap from "../pages/LoginRecap";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/registerRecap',
                element: <RegisterRecap></RegisterRecap>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/loginRecap',
                element: <LoginRecap></LoginRecap>
            },
            {
                path: '/about',
                element: <PrivateRoute><About></About></PrivateRoute>
            }
        ]
    },
]);

export default router;