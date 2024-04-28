import React, { useEffect, useState } from "react";
import Card from "./Card";
import { IoMdAppstore } from "react-icons/io";
import { FaArrowDown } from "react-icons/fa";

const AllTouristsSpot = () => {
    const [allData, setAllData] = useState([]);
    const [sortedData, setSortedData] = useState([]);
    const [sortOrder, setSortOrder] = useState("ascending");

    useEffect(() => {
        fetch("https://tourism-management-mauve.vercel.app/products")
            .then(res => res.json())
            .then(data => {
                setAllData(data);
                setSortedData(data);
            })
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    const handleSortChange = (order) => {
        setSortOrder(order);
        if (order === "ascending") {
            setSortedData([...allData].sort((a, b) => a.average_cost - b.average_cost));
        } else {
            setSortedData([...allData].sort((a, b) => b.average_cost - a.average_cost));
        }
    };
    

    return (
        <div className="lg:ml-40 lg:mr-24">
            <div>
                <div id="topFeatureSection" className="flex items-center gap-2 mt-24 mb-5">
                    <IoMdAppstore className="h-10 w-10 " />
                    <h2 className="text-3xl bg-gradient-to-r mt-3 font-semibold from-red-400 to-purple-400 bg-clip-text text-transparent">Our Productions</h2>
                    <FaArrowDown className="h-20 animate-bounce w-7 mt-3" />
                </div>
                <h1 className="text-4xl font-bold mb-8 ">Tourists Spots Section:</h1>
                <div className="flex items-center mb-4">
                    <label className="mr-2">Sort by Average Cost:</label>
                    <select className="border p-1 rounded" value={sortOrder} onChange={(e) => handleSortChange(e.target.value)}>
                        <option value="ascending">Ascending</option>
                        <option value="descending">Descending</option>
                    </select>
                </div>
            </div>
            <div className="lg:grid md:grid md:grid-cols-2 lg:grid-cols-4 gap-7">
                {sortedData.map(data => <Card key={data.id} data={data} />)}
            </div>
            <button className="btn btn-accent lg:ml-[45%] md:ml[50%] ml-[50%]  font-bold mt-10 mb-10">See ALL</button>
        </div>
    );
};

export default AllTouristsSpot;
