import React, { useState, useContext } from "react";

import RegisteredUsers from "./Parts/RegisteredUsers";
import Requested from "./Parts/Requested";

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import { Card } from "primereact/card";
import { TabView, TabPanel } from "primereact/tabview";
import { Button } from "primereact/button";

import UsersList from "./Parts/UsersList";

import styled from "styled-components";
import { SettingsContext } from "../../Contexts/SettingsContext";

import { authSignOut } from "../../Auth/AuthHelpers";
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth";

const MainWrapper = styled.div`
  float: left;
  width: 100%;

  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 2.5fr;
  }
`;

const InfoWrapper = styled.div`
  float: left;
  width: 100%;
`;

const UserPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const { setFormType, chosen } = useContext(SettingsContext);

  const signOut = () => {
    authSignOut(setFormType);
  };

  return (
    <MainWrapper>
      <UsersList />
      <InfoWrapper>
        <Button onClick={signOut}>Sign Out</Button>
        <Button className="p-button-outlined" label="Create New User"></Button>
        <Card>
          {chosen.locName} 
          {chosen.addr1}
          {chosen.addr2}
          {chosen.city}
          {chosen.zip}
          {chosen.phone}
          {chosen.email}
          {chosen.zone}
        </Card>
        <Card>
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
        </Card>
      </InfoWrapper>
    </MainWrapper>
  );
};

export default UserPage;
