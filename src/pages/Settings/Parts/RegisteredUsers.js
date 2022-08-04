import React, { useContext, useState } from "react";

import styled from "styled-components";

import { SettingsContext } from "../../../Contexts/SettingsContext.js";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ScrollPanel } from "primereact/scrollpanel";
import { Sidebar } from "primereact/sidebar";
import { Title } from "../../../CommonStyles.js";


const ListWrapper = styled.div`
  font-family: "Montserrat", sans-serif;
  width: 100%;
  background: #ffffff;
`;

const RegisteredUsers = () => {

  const [ visibleRight, setVisibleRight ] = useState(false);
  const [ selectedProduct1, setSelectedProduct1 ] = useState(null);
  const { userList, userDetails, chosen, setChosen } =
    useContext(SettingsContext);

  const authorizedUserList = userList.filter(
    (use) => use.locNick === userDetails.locNick
  );

  const handleSelectionChange = (value) => {
    console.log("value",value)
    setSelectedProduct1(value)
    setVisibleRight(true)
  }



  return (
    <ListWrapper>
      <Sidebar
       
       className="p-sidebar-md"
       visible={visibleRight}
       position="right"
       onHide={() => setVisibleRight(false)}
     >
      <div>{selectedProduct1 && selectedProduct1.userName}</div>
      <div>{selectedProduct1 && selectedProduct1.sub}</div>
      
      
     </Sidebar>
      <ScrollPanel>
        <DataTable
          value={authorizedUserList}
          className="p-datatable-striped"
          selectionMode="single" selection={selectedProduct1} onSelectionChange={e => handleSelectionChange(e.value)}
         
          dataKey="sub"
        >
          <Column
            field="userName"
            header="User"
            sortable
            filter
           
            filterPlaceholder="user"
          ></Column>

          <Column
            field="sub"
            header="UserID"
            sortable
           
            filter
            filterPlaceholder="UserID"
          ></Column>
          <Column
            field="authType"
            header="authType"
            sortable
          
            filter
            filterPlaceholder="authType"
          ></Column>
        </DataTable>
      </ScrollPanel>
    </ListWrapper>
  );
};

export default RegisteredUsers;
