
import { NavLink } from "react-router-dom";
import logo from "../../assets/WanderQuest-removebg-preview.png"
const Navbar = () => {

    const scrollToTopFeature = () => {
        const topFeatureSection = document.getElementById("topFeatureSection");
        if (topFeatureSection) {
          topFeatureSection.scrollIntoView({ behavior: "smooth" });
        }
      };

    return (
        <div className="navbar shadow-sm   bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm text-green-900 font-bold dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Home</a></li>
            <li><a>AllTourists Spot</a></li>
            <li><a>AddTourists Spot</a></li>
            <li><a>MyList</a></li>
            </ul>
          </div>
         
          <div className="lg:ml-20 lg:flex flex items-center lg:items-center">
          <img className="lg:h-16 h-12 w-12 lg:w-16" src={logo} alt="" />
          <a className="btn btn-ghost lg:text-2xl lg:mt-5  bg-gradient-to-r from-indigo-500 lg:mt-0 mt-6  via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text  ">Wander Quest</a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu text-green-900 font-bold menu-horizontal text-lg px-1">
           <NavLink to={"/"}> <li><a>Home</a></li></NavLink>
           <NavLink onClick={scrollToTopFeature}><li><a>AllTourists Spot</a></li></NavLink>
            <li><a>AddTourists Spot</a></li>
            <li><a>MyList</a></li>
          </ul>
        </div>
        
        <div className="navbar-end">
        <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[100] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
          <NavLink to={"/login"}><a className="btn mx-2 btn-outline btn-sm btn-success">Login</a></NavLink>
          <NavLink to={"/register"}><a className="btn btn-outline btn-sm btn-error  lg:mr-20">Register</a></NavLink>
        </div> 
        
      </div>
    );
};

export default Navbar;