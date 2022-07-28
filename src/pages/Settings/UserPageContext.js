import React, { useState, createContext } from "react";

export const UserPageContext = createContext();



export const UserPageProvider = (props) => {

  const [userList, setUserList] = useState("");
  const [user, setUser] = useState("kberg");

  return (
    <UserPageContext.Provider
      value={{
        userList,
        setUserList,
        user,
        setUser
      }}
    >
      {props.children}
    </UserPageContext.Provider>
  );
};
