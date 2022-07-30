import React, { useEffect, useContext } from "react";

import { Amplify, Auth, Hub } from "aws-amplify";
import { API, graphqlOperation } from "aws-amplify";
import awsmobile from "./aws-exports";

import { UserContext } from "./Contexts/UserContext";

import { Splash } from "./Auth/Splash";
import { UserApplyForm } from "./Auth/UserApplyForm";
import { UserResetPassword } from "./Auth/UserResetPassword";
import User from "./User";
import Nav from "./Nav";

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import { UserApplyThanks } from "./Auth/UserApplyThanks";
import { getLocationUser, getUser } from "./customGraphQL/queries";

Amplify.configure(awsmobile);

function App2() {
  const {
    setFormType,
    formType,
    authType,
    setUser,
    userDetails,
    setUserDetails,
  } = useContext(UserContext);

  useEffect(() => {
    checkUser();
    setAuthListener();
  }, []);

  
  const checkUser = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser().then((use) => {
        setUser(use);
        console.log("User", use);
        if (use) {
          fetchUserDetails(use.username);
          setFormType("signedIn");
        } else {
          setFormType("onNoUser");
        }
      });
    } catch (err) {
      // console.log(err)
    }
  };

  const fetchUserDetails = async (sub) => {
    console.log("sub", sub);
    try {
      const user = await API.graphql(graphqlOperation(getUser, { sub: sub }));
      let info = user.data.getUser;

      setUserDetails({
        userName: info.name,
        sub: info.sub,
      });
    } catch (error) {
      console.log("error on fetching Cust List", error);
    }
  };


  const setAuthListener = () => {
    Hub.listen("auth", (data) => {
      switch (data.payload.event) {
        case "signOut":
          setFormType("onNoUser");
          break;
        case "signIn":
          console.log("payload", data.payload.data)
          setUser(data.payload.data)
          fetchUserDetails(data.payload.data.username);
          setFormType("signedIn")
          break
        default:
          break;
      }
    });
  };

  return (
    <div className="card">
      <div className="card-container yellow-container">
        <div className="flex flex-column">
          Welcome {userDetails.userName}. Location: {userDetails.chosen},
          Authtype: {authType}
          {formType === "signedIn" && (
            <React.Fragment>
              <Nav />
              <User />
            </React.Fragment>
          )}
          {formType === "onNoUser" && <Splash />}
          {formType === "Apply" && <UserApplyForm />}
          {formType === "resetPassword" && <UserResetPassword />}
          {formType === "Thankyou" && <UserApplyThanks />}
        </div>
      </div>
    </div>
  );
}

export default App2;
