import { useEffect, useState } from "react";
import Country from "./Country";
import logo from "../../assets/Southeast_Asia-removebg-preview.png";

const Countries = () => {
  const [countries, setCountries] = useState();

  useEffect(() => {
    fetch("/Countries.json")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  console.log(countries);

  return (
    <div >
      <div className="mt-7 mb-3 lg:ml-40 ml-10">
        <img className="h-20 w-60  shadow-lg shadow-black rounded-lg" src={logo} alt="" />
        <h1 className="text-start text-4xl font-semibold mb-4 lg:mt-5 md:mt-4 mt-5">Tourist Country</h1>
      </div>

      <div className="lg:grid md:grid  md:grid-cols-2 lg:ml-40 gap-5 lg:grid-cols-4 ">
        {countries &&
          countries.map((country) => (
            <Country key={country} country={country}></Country>
          ))}
      </div>
    </div>
  );
};

export default Countries;
