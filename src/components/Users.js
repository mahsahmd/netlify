import { useContext } from "react";
import UserCard from "./UserCard";
import { UserContext } from "../Provider";

const Users = () => {
  const { users } = useContext(UserContext);
  return (
    <div className="users">
      {users.map((user, index) => (
        <UserCard key={index} user={user} />
      ))}
    </div>
  );
};

export default Users;
