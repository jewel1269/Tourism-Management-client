import { NavLink } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Country = ({ country }) => {
  AOS.init();
  
  const {image, name, id,short_description} = country
  return (
    <div data-aos="zoom-in"  className="card  lg:w-96 h-96 bg-slate-50 border-black shadow-sm shadow-slate-400 w-full lg:mt-0 mt-4  ">
      <figure className="px-10 pt-10">
        <img
        
          src={image}
          alt="Shoes"
          className="rounded-xl h-40 w-72"
        />
      </figure>
      <div className="card-body  items-center text-center">
        <p>{short_description}</p>
        <div className="card-actions ">
          <NavLink to={`countryInfo/${name}`}><button className="btn btn-success btn-outline w-full">{name}</button></NavLink>
        </div>
      </div>
    </div>
  );
};

export default Country;
