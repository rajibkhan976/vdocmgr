import type { NextPage } from "next";
import Profile from "../components/Profile";

const Home: NextPage = () => {
  return (
    <div className="container-fluid">
      <Profile />
    </div>
  );
};

export default Home;
