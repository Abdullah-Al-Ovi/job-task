
import { useContext } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const Dashboard = () => {
    const { logOut } = useContext(authContext)
    const navigate = useNavigate()
    const handleSignOut = () => {


        Swal.fire({
            title: "Are you sure?",
            // text: "Your product limit is end.",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sign out "
        }).then((result) => {
            if (result.isConfirmed) {
                logOut()
                    .then(() => {
                        
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Your work has been saved",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate('/')
                    })
            }
        });
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
            <div className="drawer-content flex flex-col h-screen lg:overflow-y-scroll ">

                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn absolute top-7 right-7 btn-primary drawer-button lg:hidden "><i className="fa-solid fa-bars"></i></label>

            </div>
            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu w-80 min-h-full bg-base-200 text-base-content p-8">

                    {
                        menu
                    }
                </ul>

            </div>

        </div>
    );
};

export default Dashboard;
