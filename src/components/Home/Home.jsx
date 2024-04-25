import AllTouristsSpot from "../AllTourists Spot/AllTouristsSpot";
import Banner from "../Banner/Banner";
import Countries from "../Countries/Countries";


const Home = () => {
    return (
        <div>
            <Banner/>
            <Countries/>
            <AllTouristsSpot/>
        </div>
    );
};

export default Home;