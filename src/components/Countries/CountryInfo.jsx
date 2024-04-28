import { useContext, useEffect, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { NavLink, useParams } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import MyList from "../MyList/MyList";

const CountryInfo = () => {
  const { name } = useParams();

  const [country, setCountry] = useState([]);
  const [items, setItems] = useState(null); 
  

  useEffect(() => {
    fetch("http://localhost:5000/countries")
      .then((res) => res.json())
      .then((data) => {
        setCountry(data);
        const foundCountry = data.find((item) => item.country_name === name);
        setItems(foundCountry);
        
      })
      .catch((error) => console.error("Error fetching country data:", error));
  }, [name]); 

  

  return (
   
     <div >
   

<div>
<div>
      {items && (
        <div style={{ backgroundColor: "rgb(229, 234, 240)" }}>
          <div>
            <h1 className="lg:ml-40 text-center p-10 text-4xl font-bold">
              {items.country_name}
            </h1>
            <h1 className="text-2xl text-center">⚠️Yoy Can Updated only the ones you have added</h1>
            
            
          </div>

          <div className="lg:grid lg:grid-cols-3 gap-6 lg:ml-60 lg:mr-60 p-5">
            <div>
              <div className="rounded-md  sm:w-[380px] shadow-sm shadow-slate-400  dark:text-gray-800">
                <img
                  src={items.image}
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
                        <IoLocationOutline />
                      </button>
                      <h4>{items.location}</h4>
                    </div>
                  </div>
                  <h3 className="font-bold bg-gradient-to-r from-green-800 via-red-500 to-indigo-600 inline-block text-transparent bg-clip-text">
                    {items.country_name}
                  </h3>
                  <p>{items.short_description}</p>
                  <div className="flex flex-wrap items-center pt-3 pb-1">
                    <div className="flex items-center space-x-2"></div>
                    <div>
                      <div>
                        <h2>
                          <strong>Season:</strong> {items.seasonality}
                        </h2>
                        <h2>
                          <strong>Time:</strong> {items.travel_time}
                        </h2>
                      </div>
                      <div>
                        <h2>
                          <strong>Cost:</strong> {items.average_cost}
                        </h2>
                        <h2>
                          <strong>Visitor:</strong>{" "}
                          {items.total_visitors_per_year}
                        </h2>
                      </div>
                    </div>
                  </div>
                  
                    <NavLink to={`/detail/${items._id}`}>
                      <button className="btn btn-success font-bold  lg:w-[60%] ml-20 btn-sm">
                        View Details
                      </button>
                    </NavLink>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
</div>

<div>
  <MyList/>
</div>

     </div>
  );
};

export default CountryInfo;
