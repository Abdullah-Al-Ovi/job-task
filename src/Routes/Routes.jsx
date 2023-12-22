
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root/Root';
import { Home } from '../Pages/Home/Home';
import { SignIn } from '../Pages/SignIn/SignIn';
import { SignUp } from '../Pages/SignUp/SignUp';
import Dashboard from '../DashBoard/Dashboard';
import Userhome from '../Dashboard/Userhome';
import AddTask from '../Dashboard/AddTask';
import TaskManagement from '../Dashboard/TaskManagement';
import PrivateRoute from './PrivateRoute/PrivateRoute';


const Routes = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            }
        ]        
    },
    {
        path:'/sign-in',
        element:<SignIn></SignIn>
    },
    {
        path:'/sign-up',
        element:<SignUp></SignUp>
    },
    {
        path:'dashboard',
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children:[
            {
                path:'userHome',
                element:<Userhome></Userhome>
            },
            {
                path:'addTask',
                element:<AddTask></AddTask>
            },
            {
                path:'taskManagement',
                element:<TaskManagement></TaskManagement>
            }
        ]
    }
])
export default Routes;