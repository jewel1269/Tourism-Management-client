import AllTouristsSpot from "../AllTourists Spot/AllTouristsSpot";
import Authentic from "../Authentic/Authentic";
import Banner from "../Banner/Banner";
import Countries from "../Countries/Countries";
import Feadback from "../Feadback/Feadback";


const Home = () => {
    return (
        <div>
            <Banner/>
            <Countries/>
            <AllTouristsSpot/>
            <Feadback/>
            <Authentic/>
        </div>
    );
};

export default Home;