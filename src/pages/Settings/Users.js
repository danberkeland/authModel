import React, { useContext, useEffect } from "react";

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";


import { SettingsProvider } from "../../Contexts/SettingsContext.tsx";
import UserPage from "./UserPage";

const Users = () => {
  
  return (
    <SettingsProvider>
      <UserPage />
    </SettingsProvider>
  );
};

export default Users;
