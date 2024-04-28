import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/WanderQuest-removebg-preview.png";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import "./Navbar.css";
import { Tooltip } from "react-tooltip";



const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut().then().catch();
  };

  const scrollToTopFeature = () => {
    const topFeatureSection = document.getElementById("topFeatureSection");
    if (topFeatureSection) {
      topFeatureSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="navbar shadow-sm bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul id="sidebar"
            tabIndex={0}
            className="menu menu-sm text-green-900 font-bold dropdown-content mt-3 z-[100] p-2 shadow bg-base-100 rounded-box w-52"
          >
              <NavLink to={"/"}>
            {" "}
            <li>
              <a>Home</a>
            </li>
          </NavLink>
          <Link onClick={scrollToTopFeature}>
            <li>
              <a>AllTourists Spot</a>
            </li>
          </Link>
          <NavLink to={"/addTourist"}>
            <li>
              <a>AddTourists Spot</a>
            </li>
          </NavLink>
          <NavLink to={"/myList"}>
            <li>
              <a>MyList</a>
            </li>
          </NavLink>
          </ul>
        </div>

        <div className="lg:ml-20 lg:flex flex items-center lg:items-center">
          <img className="lg:h-16 h-12 w-12 lg:w-16" src={logo} alt="" />
          <a className="btn btn-ghost lg:text-2xl lg:mt-5 bg-gradient-to-r from-indigo-500 lg:mt-0 mt-6 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            Wander Quest
          </a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul
          id="sidebar"
          className="menu text-green-900 font-bold menu-horizontal text-lg px-1"
        >
          <NavLink to={"/"}>
            {" "}
            <li>
              <a>Home</a>
            </li>
          </NavLink>
          <Link onClick={scrollToTopFeature}>
            <li>
              <a>AllTourists Spot</a>
            </li>
          </Link>
          <NavLink to={"/addTourist"}>
            <li>
              <a>AddTourists Spot</a>
            </li>
          </NavLink>
          <NavLink to={"/myList"}>
            <li>
              <a>MyList</a>
            </li>
          </NavLink>
        </ul>
      </div>

      <div className="navbar-end">
        {user ? (
          <div className="flex items-center gap-4 lg:mr-20">
            <div className="dropdown dropdown-end ">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10  rounded-full">
                  <img
                  className="z-[-50]"
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content={user ? user.displayName : "Null"}
                    
                    alt="User Avatar"
                    src={user?.photoURL}
                  />
                </div>
                <Tooltip id="my-tooltip" />
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[100] p-2 shadow-sm shadow-slate-400  menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <button
                    className="btn btn-outline btn-sm btn-success"
                    onClick={handleSignOut}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
            <label className="flex cursor-pointer gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <input
                type="checkbox"
                value="synthwave"
                className="toggle theme-controller"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
          </div>
        ) : (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Default Avatar"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
          </div>
        )}
        {!user && (
          <>
            <NavLink to={"/login"}>
              <a className="btn mx-2 btn-outline btn-sm btn-success">Login</a>
            </NavLink>
            <NavLink to={"/register"}>
              <a className="btn btn-outline btn-sm btn-error lg:mr-20">
                Register
              </a>
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
