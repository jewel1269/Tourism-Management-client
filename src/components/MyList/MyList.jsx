import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { NavLink, useParams } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import Swal from "sweetalert2";

const MyList = () => {
  const { user } = useContext(AuthContext);
  const [items, setItems] = useState([]);


  useEffect(() => {
    fetch(`http://localhost:5000/countries/${user?.email} `)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, [user]);



  const handleDelete = (id) => {
    console.log(id)
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/countries/${id}`, {
            method: "DELETE"
          })
            .then((res) => res.json())
            
            .then((data) => {
              console.log(data);
              if (data.deletedCount > 0) {
                Swal.fire({
                  title: "Deleted!",
                  text: "Your Coffee has been deleted.",
                  icon: "success",
                })
                .then(() => {
                  setTimeout(() => {
                    window.location.reload();
                  }, 0);
                });
              }
              
            });
          }
      });
  };

  return (
<div  style={{ backgroundColor: "rgb(229, 234, 240)" }}>
<div >
<h1 className="lg:ml-40  p-10 text-4xl font-bold">Your added List: </h1>
<NavLink to={"/"}><button className="btn text-xl mt-4 btn-ghost btn-sm lg:ml-44 lg:mb-10">🔙 Continue Visiting</button></NavLink>
        
        
</div>

    <div className="lg:grid  lg:grid-cols-3 gap-6 lg:ml-60 lg:mr-60 p-5">
      {items.map((item) => (
        <div key={item.id}>
          <div data-aos="zoom-in" className="rounded-md lg:mt-0 mt-6 sm:w-[380px] shadow-sm shadow-slate-400  dark:text-gray-800">
      
      <img
        src={item.photoURL}
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
            <h4>{item.location},</h4>
          </div>
        </div>
        <h3 className="font-bold bg-gradient-to-r from-green-800 via-red-500 to-indigo-600 inline-block text-transparent bg-clip-text">{item.country_name}</h3>
        <p>{item.description}</p>
        <div className="flex flex-wrap items-center pt-3 pb-1">
          <div className="flex items-center space-x-2">
          
            
          </div>
          <div>
            
            <h3><strong>User Name:</strong> {item.name}</h3>
            <div>
              <h2><strong>Season:</strong> {item.season}</h2>
              <h2><strong>Time:</strong> {item.travelTime}</h2>

            </div>
            <div>
              <h2><strong>Cost:</strong> {item.price}</h2>
              <h2><strong>Visitor:</strong> {item.visitor}</h2>

            </div>
          </div>
        </div>
        <div className="flex">
        <NavLink to={`/update/${item._id}`}><button className="btn btn-success font-bold  lg:w-[60%] ml-20 btn-sm">Update</button></NavLink>
        <NavLink><button onClick={() => handleDelete(item._id)} className="btn btn-error   font-bold lg:w-[60%] ml-20 btn-sm">Delete</button></NavLink>
        </div> 
      </div>
    </div>
        </div>
      ))}
    </div>
</div>
  );
};

export default MyList;
