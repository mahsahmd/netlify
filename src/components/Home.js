import { useContext } from "react";
import Loading from "./Loading";
import Form from "./Form";
import Users from "./Users";
import { UserContext } from "../Provider";

const Home = () => {
  const { loading } = useContext(UserContext);
  return (
    <div className="usersPage">
      <Form />
      {loading && <Loading />}
      <Users />
    </div>
  );
};

export default Home;
