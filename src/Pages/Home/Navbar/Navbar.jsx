import { AiOutlineMenu } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo/logo.jpeg";
// import Container from "../Container/Container";
import Container from "../../../Components/Container/Container";

const Navbar = () => {

  const navItems = (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isActive ? "text-[#0087EB]" : isPending ? "pending" : ""
        }
      >
        <li className="text-[16px] ml-4 font-medium">Home</li>
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive, isPending }) =>
          isActive ? "text-[#0087EB]" : isPending ? "pending" : ""
        }
      >
        <li className="text-[16px] font-medium ml-4">About</li>
      </NavLink>

      <NavLink
        to="/dashboard/userHome"
        className={({ isActive, isPending }) =>
          isActive ? "text-[#0087EB]" : isPending ? "pending" : ""
        }
      >
        <li className="text-[16px] font-medium  ml-4">Dashboard</li>
      </NavLink>

      {/* <NavLink
        to="/contact"
        className={({ isActive, isPending }) =>
          isActive ? "text-[#0087EB]" : isPending ? "pending" : ""
        }
      >
        <li className="text-[16px] font-medium ml-4">Contact</li>
      </NavLink> */}
    </>
  );

  return (
    <div>
      <Container>
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <AiOutlineMenu className="text-2xl"></AiOutlineMenu>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-4 font-medium uppercase"
              >
                {navItems}
              </ul>
            </div>

            <div className="flex justify-center items-center">
              <Link to="/">
                <a className="cursor-pointer">
                  {" "}
                  <img
                    className="hidden lg:block lg:w-[120px] rounded-md lg:ml-[-24px] lg:pt-2"
                    src={logo}
                    alt="logo image"
                  />{" "}
                </a>
              </Link>

            </div>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 uppercase">{navItems}</ul>
          </div>

          <div className="navbar-end">

           <Link to='/learnMore'>
           <button className="text-[16px] font-medium hover:text-[#0087EB] transition uppercase">Learn More</button>
           </Link>

          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;