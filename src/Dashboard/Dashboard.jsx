
import { useContext } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProvider';

const Dashboard = () => {
    const { logOut } = useContext(authContext)
    const navigate = useNavigate()
    const handleSignOut = () => {
        logOut()
            .then(() => {
                navigate('/')
            })
    }
 

    const menu = (
        <ul className='list-disc px-6 flex flex-col'>
            <li>
                <NavLink to='/dashboard/userHome' >
                    Profile
                </NavLink>
            </li>
            <li>
                <NavLink to='/dashboard/addTask' >
                    New Task
                </NavLink>
            </li>
            <li>
                <NavLink to='/dashboard/taskManagement' >
                    Manage Task
                </NavLink>
            </li>
            <div className="divider font-bold"></div>

            <li>
                <button onClick={handleSignOut}>Sign Out</button>
            </li>
            <li>
                <NavLink to='/'>Home</NavLink>
            </li>
        </ul>
    );

    return (
        <div className="drawer lg:drawer-open ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center  h-screen">
              
                <Outlet></Outlet>
                <label  htmlFor="my-drawer-2" className="btn absolute top-7 right-7 btn-primary drawer-button lg:hidden "><i className="fa-solid fa-bars"></i></label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    
                   {
                    menu
                   }
                </ul>

            </div>
           
        </div>
    );
};

export default Dashboard;
