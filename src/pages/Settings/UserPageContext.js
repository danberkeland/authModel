import React, { useState, createContext, useEffect } from "react";

export const UserPageContext = createContext();

const permissions = [
  { loc: "Back Porch Bakery", sub: "12345", perimssion: 1 },
  { loc: "Back Porch Bakery", sub: "22345", permission: 2 },
  { loc: "Back Porch Bakery", sub: "32345", permission: 2 },
  { loc: "BPB Extra", sub: "12345", permission: 2 },
  { loc: "BPB Extra", sub: "42345", permission: 1 },
  { loc: "Kreuzberg CA", sub: "12346", permission: 1 },
  { loc: "Kraken Avila", sub: "12346", permission: 1 },
  { loc: "Kraken Pismo", sub: "12346", permission: 1 },
  { loc: "Kraken Bonetti", sub: "12346", permission: 1 },
  { loc: "High St. Osos", sub: "12347", permission: 1 },
  { loc: "High Street Deli", sub: "12347", permission: 1 },
];

const locations = [
  { loc: "Back Porch Bakery", subs: ["12345", "22345", "32345"] },
  { loc: "BPB Extra", subs: ["12345", "42345"] },
  { loc: "Kreuzberg CA", subs: ["12346"] },
  { loc: "Kraken Avila", subs: ["12346"] },
  { loc: "Kraken Pismo", subs: ["12346"] },
  { loc: "Kraken Bonetti", subs: ["12346"] },
  { loc: "High St. Osos", subs: ["12347"] },
  { loc: "High Street Deli", subs: ["12347"] },
];

const userIDs = [
  { userID: "12345", userName: "Dan Berkeland" },
  { userID: "22345", userName: "Elena Ikeda" },
  { userID: "32345", userName: "Lindsay Trupe" },
  { userID: "42345", userName: "Bill Brocco" },
  { userID: "12346", userName: "James Whitaker" },
  { userID: "12347", userName: "Doobie Coates" },
  { userID: "REQUESTED", userName: "Lexi" },
  { userID: "REQUESTED", userName: "Nate" },
];

const requests = [
  { userName: "Lexi", loc: "High Street Deli" },
  { userName: "Nate", loc: "High St. Osos" },
];

export const UserPageProvider = (props) => {
  const [userList, setUserList] = useState([{ userName: "", loc: "" }]);
  const [user, setUser] = useState({ userName: "", loc: "" });

  useEffect(() => {
    let users = [];
    for (let loc of locations) {
      let subList = loc.subs;
      for (let sub of subList) {
        console.log(sub, loc.loc);
        let ind = userIDs.findIndex((use) => use.userID === sub);
        let name = userIDs[ind].userName;
        let newUser = {
          userName: name,
          loc: loc.loc,
          sub: sub,
        };
        users.push(newUser);
      }
    }
    for (let req of requests) {
      let newReq = {
        userName: req.userName,
        loc: req.loc,
        sub: "REQUESTED",
      };
      users.push(newReq);
    }
    setUserList(users);
  }, []);

  return (
    <UserPageContext.Provider
      value={{
        userList,
        setUserList,
        user,
        setUser,
      }}
    >
      {props.children}
    </UserPageContext.Provider>
  );
};
