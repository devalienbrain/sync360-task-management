import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import BenifittedUsers from "./BenifittedUsers/BenifittedUsers";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Sync360 | Home</title>
      </Helmet>
      <Banner></Banner>
      <div>
        <BenifittedUsers></BenifittedUsers>
      </div>
    </div>
  );
};

export default Home;
