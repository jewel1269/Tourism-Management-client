import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { IoLocationOutline } from "react-icons/io5";

const ViewDetails = () => {
  const [cards, setCards] = useState([]);
  const {loading}= useContext(AuthContext)
  const { id } = useParams();

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setCards(data);
        
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        
      });
  }, []);

  const item = cards.find((item) => item._id === id);

  if (loading) {
    return <div className="w-16 h-16 border-4 lg:ml-[50%]  lg:mt-32 lg:mb-32 bg-red-400 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
  }

  if (!item) {
    return <div>Item not found!</div>;
  }

  return (
    <div className="mt-12">
        <h1 className="text-center underline text-4xl mt-3 mb-4">Details</h1>
        <div className="card p-2 lg:ml-[10%] lg:mr-[10%] mb-12 lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img 
        className="h-[500px] rounded-xl shadow-sm shadow-slate-400 w-[600px]"
        src={item.image} alt="Album" />
      </figure>
      <div className="ml-5 ">
        <h2 className="card-title my-3 text-4xl">{item.country_Name}</h2>
        <div className="flex gap-2 items-center">
        <IoLocationOutline/>
        <h3>{item.location}</h3>
        </div>
        <p className="text-lg"><strong>About:</strong> {item.short_description}</p>
        <div className="my-5 text-lg">
            <div>
              <h2><strong>Season:</strong> {item.seasonality}</h2>
              <h2><strong>Time:</strong> {item.travel_time}</h2>

            </div>
            <div>
              <h2><strong>Cost:</strong> {item.average_cost}</h2>
              <h2><strong>Visitor:</strong> {item.totalVisitorsPerYear}</h2>

            </div>
          </div>
        <div className="card-actions justify-center">
          <button className="btn btn-success btn-outline btn-sm">Booking</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ViewDetails;
