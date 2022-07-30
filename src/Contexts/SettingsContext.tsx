import React, { useState, createContext, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listLocationUsers } from "../customGraphQL/queries";

export interface SettingsInterface {
  userList: {
    userName: string;
    locName: string;
    locNick: string;
    sub: string;
  }[];
  setUserList: React.Dispatch<
    React.SetStateAction<
      { userName: string; locName: string; locNick: string; sub: string }[]
    >
  >;
  userDetails: {
    userName: string;
    sub: string;
    locName: string;
    locNick: string;
    authType: number;
  };
  setUserDetails: React.Dispatch<
    React.SetStateAction<{
      userName: string;
      sub: string;
      locName: string;
      locNick: string;
      authType: number;
    }>
  >;
}

export const SettingsContext = createContext<SettingsInterface | undefined>(
  undefined
);

export const SettingsProvider = (props: any) => {
  const [userList, setUserList] = useState<
    { userName: string; locName: string; locNick: string; sub: string }[]
  >([
    {
      userName: "",
      locName: "",
      locNick: "",
      sub: "",
    },
  ]);
  const [userDetails, setUserDetails] = useState<{
    userName: string;
    sub: string;
    locName: string;
    locNick: string;
    authType: number;
  }>({
    userName: "",
    sub: "",
    locName: "",
    locNick: "",
    authType: 0,
  });

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const userList: any = await API.graphql(
        graphqlOperation(listLocationUsers, {
          limit: "1000",
        })
      );
      let userArray: any= userList.data.listLocationUsers.items.map((use) => ({
        userName: use.user.name,
        loc: use.location.locName,
        sub: use.user.sub,
        authType: use.authType,
      }));
      console.log(userArray);

      setUserList(userArray);
    } catch (error) {
      console.log("error on fetching Cust List", error);
    }
  };
  
  return (
    <SettingsContext.Provider
            value={{
                userList, setUserList,
                userDetails, setUserDetails
            }}>
            {props.children}
        </SettingsContext.Provider>
  );
};
