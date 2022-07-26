import React, { useEffect, useState } from "react";

import { Amplify, Auth } from "aws-amplify";
import awsmobile from "./aws-exports";

import User from "./User";
import UserNot from "./UserNot";

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

Amplify.configure(awsmobile);

function App() {
  const { isUser, setIsUser } = useState(false);

  useEffect(() => {
    Auth.currentAuthenticatedUser().then((use) => {
      use ? setIsUser(true) : setIsUser(false);
    });
  });

  return (
    <React.Fragment>
      {isUser && <User />}
      {!isUser && <UserNot />}
    </React.Fragment>
  );
}

export default App;
