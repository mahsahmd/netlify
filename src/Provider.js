import React, { useState } from "react";
import axios from "axios";

export const UserContext = React.createContext();

const Provider = (props) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUser = async (user) => {
    setLoading(true);
    const data = await axios
      .get(`https://api.github.com/search/users?q=${user}`)
      .then((res) => res.data);
    setLoading(false);
    setUsers(data.items);
  };
  const handleClear = () => {
    setUsers([]);
  };
  return (
    <UserContext.Provider
      value={{
        users,
        loading,
        getUser,
        handleClear,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default Provider;
