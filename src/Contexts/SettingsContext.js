import React, { useState, createContext, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listLocationUsers } from "../customGraphQL/queries";
import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";

export const SettingsContext = createContext();

const initialFormState = {
  username: "",
  password: "",
  newPassword: "",
  email: "",
  location: "",
};

export const SettingsProvider = (props) => {
  const [user, setUser] = useState();

  const [chosen, setChosen] = useState({
    locName: "",
    locNick: "",
  });
  const [formData, setFormData] = useState(initialFormState);
  const [formType, setFormType] = useState();

  const [userList, setUserList] = useState([
    {
      userName: "",
      locName: "",
      locNick: "",
      sub: ""
    }
  ]);
  const [userDetails, setUserDetails] = useState({
    userName: "",
    sub: "",
    locName: "",
    locNick: "",
  });

  const [ authType, setAuthType ] = useState(0)

  useEffect(() => {
    fetchCustomers();
  }, [userDetails]);

  const fetchCustomers = async () => {
    try {
      const userList = await API.graphql(
        graphqlOperation(listLocationUsers, {
          limit: "1000",
        })
      );
      let userArray = userList.data.listLocationUsers.items.map((use) => ({
        userName: use.user.name,
        sub: use.user.sub,
        subs: use.location.subs.items.map(loc => loc.userID),
        locName: use.location.locName,
        locNick: use.location.locNick,
      }));
      console.log("userArray", userArray);
      userArray = userArray.filter(use => use.subs.includes(userDetails.sub))
      console.log("userArray", userArray);

      

      setUserList(userArray);
    } catch (error) {
      console.log("error on fetching Cust List", error);
    }
  };

  return (
    <SettingsContext.Provider
      value={{
        userList,
        setUserList,
        userDetails,
        setUserDetails,
        user,
        setUser,
        chosen,
        setChosen,
        formData,
        setFormData,
        formType,
        setFormType,
        authType,
        setAuthType
      }}
    >
      {props.children}
    </SettingsContext.Provider>
  );
};