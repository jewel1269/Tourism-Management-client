import { IoIosArrowDown } from "react-icons/io";


const AddTouristsSpot = () => {

const handleAdd = e=>{
  e.preventDefault()
  const form = e.target;
  const name = form.name.value;
  const email = form.email.value;
  const photoURL= form.photoURL.value
  const spot_name = form.spot_name.value;
  const location = form.location.value;
  const country_name= form.country_name.value;
  const price = form.price.value;
  const season = form.season.value;
  const travelTime = form.travelTime.value;
  const visitor = form.visitor.value;
  const description = form.description.value;
  const userAdd = {name, email,spot_name, photoURL, location, country_name, price, season, travelTime,visitor,description}
  console.log(userAdd)

  fetch("http://localhost:5000/countries",{
    method:"POST",
    headers:{
      "content-type": "application/json"
    },
    body: JSON.stringify(userAdd)
  })
  .then(res=> res.json())
  .then(data => console.log(data))
  form.reset()

  
}



    return (
        <div className="p-6 lg:ml-20 lg:mr-20 mt-10 mb-10 bg-slate-50 border shadow-xl shadow-slate-300 ">
        <h1 className="text-2xl font-bold text-center mb-5">Add Your Product</h1>
        <form onSubmit={handleAdd} className="lg:grid lg:grid-cols-2 gap-7">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="product_name">
            tourists_spot_name:
            </label>
            <input placeholder="tourists_spot_name" className="appearance-none border rounded w-full py-4 px-3 leading-tight focus:outline-none focus:shadow-outline" id="product_name" type="text" name="spot_name" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="type">
            Image URL
            </label>
            <input className="appearance-none border rounded w-full py-4 px-3 leading-tight focus:outline-none focus:shadow-outline" id="text" type="text" name="photoURL" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="image_url">
            location:
            </label>
            <input className="appearance-none border rounded w-full py-4 px-3 leading-tight focus:outline-none focus:shadow-outline" id="text" type="text" name="location" />
          </div>
          <div className="relative mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="country_name">
            Country Name:
          </label>
          <div className="relative">
            <select
              className="appearance-none border rounded w-full py-4 px-3 pr-8 leading-tight focus:outline-none focus:shadow-outline"
              id="country_name"
              name="country_name"
              type="text"
             
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
            <label className="block text-gray-700 font-bold mb-2" htmlFor="price">
            average_cost:
            </label>
            <input className="appearance-none border rounded w-full py-4 px-3 leading-tight focus:outline-none focus:shadow-outline" id="price" name="price"  />
          </div>
         
    
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="type">
            seasonality: 
            </label>
            <input className="appearance-none border rounded w-full py-4 px-3 leading-tight focus:outline-none focus:shadow-outline" id="text" type="text" name="season" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="rating">
            travel_time:
            </label>
            <input className="appearance-none border rounded w-full py-4 px-3 leading-tight focus:outline-none focus:shadow-outline" id="text" type="text" name="travelTime" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="type">
            totaL Visitors Per Year:
            </label>
            <input className="appearance-none border rounded w-full py-4 px-3 leading-tight focus:outline-none focus:shadow-outline" id="text" type="text" name="visitor" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="rating">
            User Name:
            </label>
            <input className="appearance-none border rounded w-full py-4 px-3 leading-tight focus:outline-none focus:shadow-outline" id="name" name="name" type="name" />
          </div>
          <div className="mb-4 ">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="rating">
            User Email:
            </label>
            <input className="appearance-none border rounded w-full py-4 px-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" name="email" />
          </div>
          <div className="mb-4 col-span-2">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
            short_description:
            </label>
            <textarea className="appearance-none border rounded w-full py-4 px-3 leading-tight focus:outline-none focus:shadow-outline" id="description" type="text" name="description" rows="4"></textarea>
          </div>
          <br />
          <div className="lg:flex lg:items-center lg:ml-0 ml-32 md:ml-96 ">
            <button className="bg-blue-500 hover:bg-success  text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Add Spot
            </button>
          </div>
        </form>
      </div>
    );
};

export default AddTouristsSpot;