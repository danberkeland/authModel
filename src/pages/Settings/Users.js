import React, { useContext, useEffect } from "react";

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";


import { UserPageProvider } from "./UserPageContext";
import UserPage from "./UserPage";

const Users = () => {
  
  return (
    <UserPageProvider>
      <UserPage />
    </UserPageProvider>
  );
};

export default Users;
