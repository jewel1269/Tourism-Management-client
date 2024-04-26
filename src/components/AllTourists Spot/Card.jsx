import { IoLocationOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Card = ({ data }) => {
  const {image, location,country_Name, id} = data;

  return (
    <div className="rounded-md  sm:w-[380px] shadow-sm shadow-slate-400  dark:text-gray-800">
      
      <img
        src={image}
        alt=""
        className="object-cover  object-center rounded-lg shadow-md shadow-slate-500   h-56 w-full"
      />
      <div className="p-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <button
              type="button"
              title="Like post"
              className="flex items-center justify-center"
            >
              <IoLocationOutline/>
            </button>
            <h4>{location},</h4>
          </div>
        </div>
        <h3>{country_Name}</h3>
        <div className="flex flex-wrap items-center pt-3 pb-1">
          <div className="flex items-center space-x-2">
            <div className="flex -space-x-1">
              <img
                alt=""
                className="w-5 h-5 border rounded-full border-gray-800 dark:border-gray-100"
                src="https://source.unsplash.com/40x40/?portrait?1"
              />
              <img
                alt=""
                className="w-5 h-5 border rounded-full border-gray-800 dark:border-gray-100"
                src="https://source.unsplash.com/40x40/?portrait?2"
              />
              <img
                alt=""
                className="w-5 h-5 border rounded-full border-gray-800 dark:border-gray-100"
                src="https://source.unsplash.com/40x40/?portrait?3"
              />
            </div>
            <span className="text-sm">
              Liked by
              <span className="font-semibold">Mamba UI</span>and
              <span className="font-semibold">86 others</span>
            </span>
          </div>
        </div>
        <NavLink to={`/details/:${id}`}><button className="btn btn-success  lg:w-[60%] ml-20 btn-sm">View Details</button></NavLink>
      </div>
    </div>
  );
};

export default Card;



