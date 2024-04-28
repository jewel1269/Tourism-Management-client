import { IoLocationOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Card = ({ data }) => {
  const {image, location,country_Name, _id, average_cost,
  seasonality,
  travel_time,
  totalVisitorsPerYear} = data;

  return (
    <div data-aos="zoom-in" className="rounded-md   sm:w-[380px] shadow-sm shadow-slate-400  dark:text-gray-100">
      
      <img
        src={image}
        alt=""
        className="object-cover  object-center rounded-lg shadow-md shadow-slate-500   h-56 w-full"
      />
      <div className="p-2 dark:text-gray-100">
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
        <h3 className="font-bold bg-gradient-to-r from-green-800 via-red-500 to-indigo-600 inline-block text-transparent bg-clip-text">{country_Name}</h3>
        <div className="flex flex-wrap items-center pt-3 pb-1">
          <div className="flex items-center space-x-2">
          
            
          </div>
          <div>
            <div>
              <h2><strong>Season:</strong> {seasonality}</h2>
              <h2><strong>Time:</strong> {travel_time}</h2>

            </div>
            <div>
              <h2><strong>Cost:</strong> {average_cost}</h2>
              <h2><strong>Visitor:</strong> {totalVisitorsPerYear}</h2>

            </div>
          </div>
        </div>
        <NavLink to={`/details/${_id}`}><button className="btn btn-active hover:bg-green-500  lg:w-[60%] ml-20 btn-sm">View Details</button></NavLink>
      </div>
    </div>
  );
};

export default Card;



