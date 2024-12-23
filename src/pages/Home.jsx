import Hero from "../components/others/Hero";
import PopularServices from "../components/others/PopularServices";

const Home = () => {
    return (
        <div>
            {/* hero section */}
            <Hero />
            {/* Popular services section */}
            <PopularServices />
        </div>
    );
};

export default Home;