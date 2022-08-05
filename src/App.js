import React, { useEffect, useContext } from "react";

import { Amplify } from "aws-amplify";
import awsmobile from "./aws-exports";

import { SettingsContext } from "./Contexts/SettingsContext";

import { Splash } from "./Auth/Splash";
import { UserApplyForm } from "./Auth/UserApplyForm";
import { UserResetPassword } from "./Auth/UserResetPassword";
import { UserApplyThanks } from "./Auth/UserApplyThanks";
import UserPage from "./pages/Settings/UserPage";
import Nav from "./Nav";

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import {
  checkUser,
  fetchUserDetails,
  setAuthListener,
} from "./Auth/AuthHelpers";

Amplify.configure(awsmobile);

export function App() {
  const {
    userDetails,
    setUserDetails,
    setFormType,
    formType,
    authType,
    setUser,
    user,
  } = useContext(SettingsContext);

  useEffect(() => {
    setAuthListener(setFormType, setUser, setUserDetails);
  }, []);

  useEffect(() => {
    checkUser().then((use) => {
      setUser(use);
      setFormType(use ? "signedIn" : "onNoUser");
    });
  }, []);

  useEffect(() => {
    user &&
      fetchUserDetails(user.username).then((info) => {
        setUserDetails({
          ...userDetails,
          userName: info.name,
          sub: info.sub,
        });
      });
  }, [user]);

  return (
    <React.Fragment>
      <h1>Kato was Here</h1>
      Welcome {userDetails.userName}. Location: {userDetails.locName}. Authtype:{" "}
      {authType}.
      {formType === "signedIn" && (
        <React.Fragment>
          <Nav />
          <UserPage />
        </React.Fragment>
      )}
      {formType === "onNoUser" && <Splash />}
      {formType === "Apply" && <UserApplyForm />}
      {formType === "resetPassword" && <UserResetPassword />}
      {formType === "Thankyou" && <UserApplyThanks />}
    </React.Fragment>
  );
}

export default App;
