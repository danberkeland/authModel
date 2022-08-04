import React, { useState, useContext } from "react";

import RegisteredUsers from "./Parts/RegisteredUsers";
import Requested from "./Parts/Requested";

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import { TabView, TabPanel } from "primereact/tabview";
import { Button } from "primereact/button";

import UsersList from "./Parts/UsersList";

import { MainWrapper, InfoWrapper } from "../../CommonStyles";

import { SettingsContext } from "../../Contexts/SettingsContext";

import { UserInfo } from "./Parts/UserInfo";



const UserPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const { chosen } = useContext(SettingsContext);


  return (
    <MainWrapper>
      <UsersList />
      <InfoWrapper>
       
        <Button className="p-button-outlined" label="Create New Location"></Button>
        <UserInfo />

     
          <TabView
            activeIndex={activeIndex}
            onTabChange={(e) => setActiveIndex(e.index)}
          >
            <TabPanel header="Registered &nbsp;" rightIcon="pi pi-map">
              <RegisteredUsers />
            </TabPanel>
            <TabPanel header="Unregistered &nbsp;" rightIcon="pi pi-map">
              <Requested />
            </TabPanel>
          </TabView>
       
      </InfoWrapper>
    </MainWrapper>
  );
};

export default UserPage;
