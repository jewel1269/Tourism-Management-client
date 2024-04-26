import { useEffect, useState } from "react";
import Card from "./Card";


const Bangladesh = () => {
    const [banglas, setBanglas] = useState()
    

    useEffect(()=>{
        fetch("/Bangla.json")
        .then(res=> res.json())
        .then(data=>setBanglas(data))
    },[])
    console.log(banglas)


    return (
       <div>
        <h1 className="text-5xl text-center mt-10 mb-10">Bangladesh</h1>
         <div className="lg:grid lg:grid-cols-3 gap-5 lg:ml-28">
            {
               banglas && banglas.map(bangla =><Card key={bangla.id} bangla={bangla}></Card>)
            }
        </div>
       </div>
    );
};

export default Bangladesh;

