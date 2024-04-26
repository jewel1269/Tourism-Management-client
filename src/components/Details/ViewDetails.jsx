import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ViewDetails = () => {
    const [cards, setCards] = useState()
    const {id} = useParams()


    useEffect(()=>{
        fetch("http://localhost:5000/products")
        .then(res=> res.json())
        .then(data => setCards(data.find((item) => item._id === (id))))
    },[])
    
    console.log(cards)
    // const items = cards && cards.find(item=> item._id == id)
    // console.log(items)
    return (
        <div>
            <h1>Coming soon:</h1>
        </div>
    );
};

export default ViewDetails;