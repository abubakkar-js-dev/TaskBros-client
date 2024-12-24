import { Helmet } from "react-helmet-async";
import Hero from "../components/others/Hero";
import PopularServices from "../components/others/PopularServices";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home - TaskBros | Service Sharing Platform</title>
      </Helmet>
      {/* hero section */}
      <Hero />
      {/* Popular services section */}
      <PopularServices />
    </div>
  );
};

export default Home;
