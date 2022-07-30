import React, { useState, createContext, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listLocationUsers } from "../../customGraphQL/queries";


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
  const [userList, setUserList] = useState([{ userName: "", loc: "", sub: "" }]);
  const [user, setUser] = useState({ userName: "", loc: "" });

  useEffect(() => {
    fetchCustomers()
},[])



const fetchCustomers = async () => {
    try{
      const userList = await API.graphql(graphqlOperation(listLocationUsers , {
            limit: '1000'
            }))   
      let userArray = userList.data.listLocationUsers.items.map(use => ({
        userName: use.user.name,
        loc: use.location.locName,
        sub: use.user.sub,
        authType: use.authType     
      }))  
      console.log(userArray) 
    
      setUserList(userArray)
      
    } catch (error){
      console.log('error on fetching Cust List', error)
    }
  }


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
