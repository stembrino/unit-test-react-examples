import React, { createContext, useContext, useState } from "react";
import UserService from "../../services/User.service";
import { Injection } from "../../tools/Injection";

type UserContextType = {
  users: any[];
  fetchUsers: () => void;
};
export const UserContext = createContext({
  users: [],
  fetchUsers: () => {},
} as UserContextType);

export const useUserContext = () => {
  return useContext(UserContext);
};

const userService: UserService = Injection.injectUserService();

const UserProvider = (props: { children: React.ReactNode }) => {
  const [users, setUsers] = useState([]);

  console.debug("INFO: User Provider has been rendered.");

  const fetchUsers = async () => {
    const users = await userService.getUsers();
    setUsers(users);
  };

  const defaultValue: UserContextType = { users: users, fetchUsers: fetchUsers };

  return <UserContext.Provider value={defaultValue}>{props.children}</UserContext.Provider>;
};

export default UserProvider;
