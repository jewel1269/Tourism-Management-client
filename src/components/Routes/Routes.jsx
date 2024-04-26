import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Countries from "../Countries/Countries";
import ViewDetails from "../Details/ViewDetails";
import AddTouristsSpot from "../AddTourists Spot/AddTouristsSpot";
import Bangladesh from "../../Country/Banglasedh/Bangladesh";
import MyList from "../MyList/MyList";
import PrivateRoute from "../Private1/PrivateRoute";
import PrivateMyList from "../Private2/PrivateMyList";




const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
            path: "/countries",
            element:<Countries/>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
            path: "/details/:id",
            element: <ViewDetails/>
        },
        {
          path: "/addTourist",
          element: <PrivateRoute> <AddTouristsSpot/></PrivateRoute>

        },
        {
          path: "/bangladesh/:id",
          element: <Bangladesh/>
        },
        {
          path:"/myList",
          element: <PrivateMyList><MyList/></PrivateMyList>
        },
        
      ]
    },
  ]);
  
  export default router;