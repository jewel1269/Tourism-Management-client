import { useEffect, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { NavLink, useParams } from "react-router-dom";

const Detail = () => {
    const [item, setItem] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetch("http://localhost:5000/countries")
            .then((res) => res.json())
            .then((data) => {
                const foundItem = data.find((country) => country._id === id);
                setItem(foundItem);
            })
            .catch((error) => console.error("Error fetching country data:", error));
    }, [id]); 

    return (
        <div className="mt-12">
            <h1 className="text-center underline text-4xl mt-3 mb-4">Details</h1>
            {item && (
                <div className="card p-2 lg:ml-[10%] lg:mr-[10%] mb-12 lg:card-side bg-base-100 shadow-xl">
                    <figure>
                        <img 
                            className="h-[500px] rounded-xl shadow-sm shadow-slate-400 w-[600px]"
                            src={item.image} 
                            alt="Country" 
                        />
                    </figure>
                    <div className="ml-5 ">
                        <h2 className="card-title my-3 text-4xl">{item.country_name}</h2>
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
                       <div className="flex gap-2">
                      <NavLink to={-1}>
                      <div className="card-actions justify-center">
                            <button className="btn btn-success btn-outline btn-sm">Back</button>
                        </div>
                      </NavLink>
                        <div className="card-actions justify-center">
                            <button className="btn btn-success btn-outline btn-sm">Booking</button>
                        </div>
                       </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Detail;
