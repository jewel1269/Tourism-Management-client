import { IoIosArrowDown } from "react-icons/io";


const AddTouristsSpot = () => {
    return (
        <div className="p-6 lg:ml-20 lg:mr-20 mt-10 mb-10 bg-slate-50 border shadow-xl shadow-slate-300 ">
        <h1 className="text-2xl font-bold text-center mb-5">Add Your Product</h1>
        <form className="lg:grid lg:grid-cols-2 gap-7">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="product_name">
            tourists_spot_name?
            </label>
            <input placeholder="tourists_spot_name" className="appearance-none border rounded w-full py-5 px-3 leading-tight focus:outline-none focus:shadow-outline" id="product_name" type="text" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="image_url">
            location:
            </label>
            <input className="appearance-none border rounded w-full py-5 px-3 leading-tight focus:outline-none focus:shadow-outline" id="image_url" type="text" />
          </div>
          <div className="relative mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="country_name">
            Country Name:
          </label>
          <div className="relative">
            <select
              className="appearance-none border rounded w-full py-5 px-3 pr-8 leading-tight focus:outline-none focus:shadow-outline"
              id="country_name"
             
            >
              <option value="">Select Country</option>
              <option value="country1">Bangladesh</option>
              <option value="country2">Malaysia</option>
              <option value="country2">Vietnam</option>
              <option value="country2">Indonesia</option>
              <option value="country2">Cambodia</option>
              <option value="country2">Thailand</option>
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
            <input className="appearance-none border rounded w-full py-5 px-3 leading-tight focus:outline-none focus:shadow-outline" id="price"  />
          </div>
         
    
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="type">
            seasonality: 
            </label>
            <input className="appearance-none border rounded w-full py-5 px-3 leading-tight focus:outline-none focus:shadow-outline" id="type" type="text" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="rating">
            travel_time:
            </label>
            <input className="appearance-none border rounded w-full py-5 px-3 leading-tight focus:outline-none focus:shadow-outline" id="rating" type="number" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="type">
            totaL Visitors Per Year:
            </label>
            <input className="appearance-none border rounded w-full py-5 px-3 leading-tight focus:outline-none focus:shadow-outline" id="type" type="text" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="rating">
            User Name:
            </label>
            <input className="appearance-none border rounded w-full py-5 px-3 leading-tight focus:outline-none focus:shadow-outline" id="rating" type="number" />
          </div>
          <div className="mb-4 col-span-2">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="rating">
            User Email:
            </label>
            <input className="appearance-none border rounded w-full py-5 px-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" name="email" />
          </div>
          <div className="mb-4 col-span-2">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
            short_description:
            </label>
            <textarea className="appearance-none border rounded w-full py-5 px-3 leading-tight focus:outline-none focus:shadow-outline" id="description" rows="4"></textarea>
          </div>
          <br />
          <div className="lg:flex lg:items-center lg:ml-0 ml-32 md:ml-96 ">
            <button className="bg-blue-500 hover:bg-blue-700  text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Add Spot
            </button>
          </div>
        </form>
      </div>
    );
};

export default AddTouristsSpot;