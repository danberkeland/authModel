import React, { useEffect, useContext } from "react";

import { Amplify, Auth, Hub } from "aws-amplify";
import awsmobile from "./aws-exports";

import { UserContext } from "./Auth/UserContext";

import { Splash } from "./Auth/Splash";
import { UserApplyForm } from "./Auth/UserApplyForm";
import { UserResetPassword } from "./Auth/UserResetPassword";
import User from "./User";

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import { UserApplyThanks } from "./Auth/UserApplyThanks";

Amplify.configure(awsmobile);

function App2() {
  const { setFormType, formType } =
    useContext(UserContext);

  useEffect(() => {
    checkUser();
    setAuthListener();
  }, []);

  const checkUser = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      console.log(user);
      if (user) {
        setFormType("signedIn");
      }
    } catch (err) {
      // console.log(err)
    }
  };

  const setAuthListener = () => {
    Hub.listen("auth", (data) => {
      switch (data.payload.event) {
        case "signOut":
          setFormType("onNoUser");
          break;
        default:
          break;
      }
    });
  };

  return (
    <div class="card">
      <div class="card-container yellow-container">
        <div class="flex flex-column">
          {formType === "onNoUser" && <Splash />}
          {formType === "Apply" && <UserApplyForm />}
          {formType === "resetPassword" && <UserResetPassword />}
          {formType === "signedIn" && <User />}
          {formType === "Thankyou" && <UserApplyThanks />}
        </div>
      </div>
    </div>
  );
}

export default App2;
