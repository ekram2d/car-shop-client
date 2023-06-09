import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import ErrorElement from "../Pages/ErrorElement";
import Register from "../Pages/Register/Register";

const router = createBrowserRouter([
      {
        path: "/",
        element: <Main></Main>,
        errorElement:<ErrorElement></ErrorElement>,
        // errorElement:<ErrorElement></ErrorElement>,

        children:[


            {
                  path:'/',
                  element:<Home></Home>
            },
            {
              path:'login',
              element:<Login></Login>
            },
            {
              path:'register',
              element:<Register></Register>
            },

        ]
      },
    ]);

    export default router;