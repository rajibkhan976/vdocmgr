import Login from "./Login";
import Layout from "./Layout";
import Dashboard from "./Dashboard";
import useAppStore, { AppStore } from "../store/useAppStore";

const Profile = () => {
  const { isAuthenticated } = useAppStore((state) => state as AppStore);

  return <Layout>{!isAuthenticated ? <Login /> : <Dashboard />}</Layout>;
};

export default Profile;
