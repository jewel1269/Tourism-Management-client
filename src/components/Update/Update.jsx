import { useContext } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLoaderData, useParams } from "react-router-dom";



const Update = () => {
    const {user} = useContext(AuthContext)
    const item = useParams()
    console.log(item)

    const handleUpdate = e => {
        e.preventDefault()
  const form = e.target;
  const name = form.name.value;
  const email= user?.email;
  const photoURL= form.photoURL.value
  const userEmail = form.userEmail.value;
  const spot_name = form.spot_name.value;
  const location = form.location.value;
  const country_name= form.country_name.value;
  const price = form.price.value;
  const season = form.season.value;
  const travelTime = form.travelTime.value;
  const visitor = form.visitor.value;
  const description = form.description.value;
  const userAdd = {name,email, userEmail,spot_name, photoURL, location, country_name, price, season, travelTime,visitor,description}
  console.log(userAdd)
    
        fetch(`http://localhost:5000/countries/${item.id}`, {
            method:"PUT",
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify(userAdd)
    
        })
        .then(res => res.json())
        .then(data =>
            {
              console.log(data);
              if(data.modifiedCount> 0){
                Swal.fire({
                  title: 'Success!',
                  text: 'Coffee Updated successfully',
                  icon: 'success',
                  confirmButtonText: 'Cool'
                })
              
              }
            }
        )
    }


    


    return (
        <div 
        className="hero p-10  min-h-screen"
      style={{
        backgroundImage:
          "url(https://static.vecteezy.com/system/resources/previews/030/226/118/large_2x/tropical-paradise-beach-with-white-sand-and-crystal-clear-blue-water-beautiful-natural-summer-vacation-holidays-background-travel-tourism-wide-panorama-background-concept-ai-generative-free-photo.jpg)",
      }}
        >

        
        <div className="p-6 lg:ml-80 text-white  lg:mr-80  mb-10  lg:w-[50%] border border-slate-400 shadow-xl shadow-slate-300 ">
        <h1 className="text-2xl font-bold text-center mb-5">Update Your Tourist Spot</h1>
        <form onSubmit={handleUpdate} className="lg:grid lg:grid-cols-2 gap-7">
          <div className="mb-4 ">
            <label className="block   text-white  font-bold mb-2" htmlFor="product_name">
            tourists_spot_name:
            </label>
            <input defaultValue={item.spot_name}  className="appearance-none  border border-slate-400  bore rounded w-full py-4 px-3 leading-tight focus:outline-none focus:shadow-outline" id="product_name" type="text" name="spot_name" />
          </div>
          <div className="mb-4">
            <label className="block text-white  font-bold mb-2" htmlFor="type">
            Image URL
            </label>
            <input defaultValue={item.photoURL}  className="appearance-none border border-slate-400 text-black rounded w-full py-4 px-3 leading-tight focus:outline-none focus:shadow-outline" id="text" type="text" name="photoURL" />
          </div>
          <div className="mb-4">
            <label className="block text-white  font-bold mb-2" htmlFor="image_url">
            location:
            </label>
            <input defaultValue={item.location} className="appearance-none border border-slate-400 text-black rounded w-full py-4 px-3 leading-tight focus:outline-none focus:shadow-outline" id="text" type="text" name="location" />
          </div>
          <div className="relative mb-4">
          <label className="block text-white  font-bold mb-2" htmlFor="country_name">
            Country Name:
          </label>
          <div className="relative">
            <select
              className="appearance-none border border-slate-400 text-black rounded w-full py-4 px-3 pr-8 leading-tight focus:outline-none focus:shadow-outline"
              id="country_name"
              name="country_name"
              type="text"
              defaultValue={item.country_name}
             
            >
              <option value="">Select Country</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="Malaysia">Malaysia</option>
              <option value="Vietnam">Vietnam</option>
              <option value="Indonesia">Indonesia</option>
              <option value="Cambodia">Cambodia</option>
              <option value="Thailand">Thailand</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <IoIosArrowDown className="text-gray-600" />
            </div>
          </div>
        </div>
          <div className="mb-4">
            <label className="block text-white  font-bold mb-2" htmlFor="price">
            average_cost:
            </label>
            <input defaultValue={item.price} className="appearance-none border border-slate-400 text-black rounded w-full py-4 px-3 leading-tight focus:outline-none focus:shadow-outline" id="price" name="price"  />
          </div>
         
    
          <div className="mb-4">
            <label className="block text-white  font-bold mb-2" htmlFor="type">
            seasonality: 
            </label>
            <input defaultValue={item.season} className="appearance-none border border-slate-400 text-black rounded w-full py-4 px-3 leading-tight focus:outline-none focus:shadow-outline" id="text" type="text" name="season" />
          </div>
          <div className="mb-4">
            <label className="block text-white  font-bold mb-2" htmlFor="rating">
            travel_time:
            </label>
            <input defaultValue={item.travelTime} className="appearance-none border border-slate-400 text-black rounded w-full py-4 px-3 leading-tight focus:outline-none focus:shadow-outline" id="text" type="text" name="travelTime" />
          </div>
          <div className="mb-4">
            <label className="block text-white  font-bold mb-2" htmlFor="type">
            totaL Visitors Per Year:
            </label>
            <input defaultValue={item.visitor} className="appearance-none border border-slate-400 text-black rounded w-full py-4 px-3 leading-tight focus:outline-none focus:shadow-outline" id="text" type="text" name="visitor" />
          </div>
          <div className="mb-4">
            <label className="block text-white  font-bold mb-2" htmlFor="rating">
            User Name:
            </label>
            <input defaultValue={item.name} className="appearance-none border border-slate-400 text-black rounded w-full py-4 px-3 leading-tight focus:outline-none focus:shadow-outline" id="name" name="name" type="name" />
          </div>
          <div className="mb-4 ">
            <label className="block text-white  font-bold mb-2" htmlFor="rating">
            User Email:
            </label>
            <input defaultValue={item.userEmail} className="appearance-none border border-slate-400  text-black rounded w-full py-4 px-3 leading-tight focus:outline-none focus:shadow-outline" id="text" type="text" name="userEmail" />
          </div>
          <div className="mb-4 col-span-2">
            <label className="block text-white  font-bold mb-2" htmlFor="description">
            short_description:
            </label>
            <textarea placeholder="write something......" className="appearance-none border border-slate-400 text-black rounded w-full py-4 px-3 leading-tight focus:outline-none focus:shadow-outline" id="description" type="text" name="description" rows="4"></textarea>
          </div>
          <br />
          <div className="lg:flex lg:items-center lg:ml-0 ml-32 md:ml-96 ">
            <button  className="bg-blue-500 hover:bg-success   text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Update
            </button>
          </div>
        </form>
      </div>
      </div>
    );
};

export default Update;