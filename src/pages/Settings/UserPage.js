import React, { useContext, useState } from "react";

import { SettingsContext } from "../../Contexts/SettingsContext.js";

import ByLocation from "./Parts/ByLocation";
import ByUser from "./Parts/ByUser";
import Requested from "./Parts/Requested";


import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import { Sidebar } from "primereact/sidebar";

import { Card } from "primereact/card";
import { TabView, TabPanel } from "primereact/tabview";
import { ScrollPanel } from "primereact/scrollpanel";
import { Button } from "primereact/button";

import UsersList from "./Parts/UsersList";

import styled from "styled-components";

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
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

 
  let { chosen, setChosen } = useContext(SettingsContext);


  return (
    <MainWrapper>
      <UsersList />
      <Sidebar
        visible={visible}
        position="right"
        className="p-sidebar-md"
        blockScroll={false}
        onHide={() => setVisible(false)}
      >
        <ScrollPanel style={{ width: "100%", height: "90vh" }}>
          <ByUser setVisible={setVisible} dis={false} />
        </ScrollPanel>
      </Sidebar>
      <InfoWrapper>
        <Button className="p-button-outlined" label="Create New User"></Button>
        <Card>
          <TabView
            activeIndex={activeIndex}
            onTabChange={(e) => setActiveIndex(e.index)}
          >
            <TabPanel header="By User &nbsp;" rightIcon="pi pi-user">
              <ByUser setVisible={setVisible} dis={true} />
            </TabPanel>
            <TabPanel header="By Location &nbsp;" rightIcon="pi pi-map">
              <ByLocation setVisible={setVisible} dis={true} />
            </TabPanel>
            <TabPanel header="REQUESTED &nbsp;" rightIcon="pi pi-map">
              <Requested setVisible={setVisible} dis={true} />
            </TabPanel>
            
          </TabView>
        </Card>
      </InfoWrapper>
    </MainWrapper>
  );
};

export default UserPage;
