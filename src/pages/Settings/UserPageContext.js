import React, { useState, createContext } from "react";

export const UserPageContext = createContext();



const customers = [
  { userName: "Dan Berkeland", loc: "Back Porch Bakery", sub: "12345" },
  { userName: "Elena Ikeda", loc: "Back Porch Bakery", sub: "22345" },
  { userName: "Lindsay Trupe", loc: "Back Porch Bakery", sub: "32345" },
  { userName: "Dan Berkeland", loc: "BPB Extra", sub: "12345" },
  { userName: "Bill Brocco", loc: "BPB Extra", sub: "42345" },
  { userName: "James Whitaker", loc: "Kreuzberg CA", sub: "12346" },
  { userName: "James Whitaker", loc: "Kraken Avila", sub: "12346" },
  { userName: "James Whitaker", loc: "Kraken Pismo", sub: "12346" },
  { userName: "James Whitaker", loc: "Kraken Bonetti", sub: "12346" },
  { userName: "Doobie Coates", loc: "High St. Osos", sub: "12347" },
  { userName: "Doobie Coates", loc: "High Street Deli", sub: "12347" },
  { userName: "Lexi", loc: "High Street Deli", sub: "REQUESTED" },
  { userName: "Nate", loc: "High St. Osos", sub: "REQUESTED" },
];



export const UserPageProvider = (props) => {

  const [userList, setUserList] = useState(customers);
  const [user, setUser] = useState({ userName: '', loc: ''});

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
