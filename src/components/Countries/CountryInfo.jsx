import { useContext, useEffect, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { NavLink, useParams } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import MyList from "../MyList/MyList";
import Card from "./Card";
import celebration from "../../../public/Animation.json"
import Lottie from "lottie-react";



const CountryInfo = () => {
  const { name } = useParams();

  const [country, setCountry] = useState([]);
  const [items, setItems] = useState(null); 
  

  useEffect(() => {
    fetch("http://localhost:5000/countries")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setCountry(data);
        const foundCountry = data.filter((item) => item?.country_name == name)
        console.log(foundCountry)
        setItems(foundCountry);
        
      })
      .catch((error) => console.error("Error fetching country data:", error));
  }, [name]); 

  return (
   
     <div style={{ backgroundColor: "rgb(229, 234, 240)" }}>
      <div>
  <h1 className="lg:ml-40 text-center p-10 text-4xl font-bold">
   
  </h1>
  <h1 className="text-4xl mb-5 text-center">⬇️ Here all tourist spot</h1>
  <Lottie className="h-72 " animationData={celebration} loop={true} />
  
</div>
      <div  className="lg:grid md:grid  lg:grid-cols-3 md:grid-cols-2 ">

        {
         items && items.map(item=><Card key={item.id} item={item}/>) 
        }
      </div>


     </div>
  );
};

export default CountryInfo;





