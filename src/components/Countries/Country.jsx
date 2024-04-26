import { NavLink } from "react-router-dom";

const Country = ({ country }) => {
  
  const {image, name, id} = country
  return (
    <div className="card lg:w-96 h-96 border-black shadow-sm shadow-slate-400 w-full lg:mt-0 mt-4 bg-base-100 ">
      <figure className="px-10 pt-10">
        <img
        
          src={image}
          alt="Shoes"
          className="rounded-xl h-40 w-72"
        />
      </figure>
      <div className="card-body items-center text-center">
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions ">
          <NavLink to={`/bangladesh/${id}`}><button className="btn btn-success btn-outline w-full">{name}</button></NavLink>
        </div>
      </div>
    </div>
  );
};

export default Country;
