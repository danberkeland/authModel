import React, { useContext, useState } from "react";

import styled from "styled-components";

import { SettingsContext } from "../../../Contexts/SettingsContext.js";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ScrollPanel } from "primereact/scrollpanel";

const ListWrapper = styled.div`
  font-family: "Montserrat", sans-serif;
  width: 100%;
  background: #ffffff;
`;

const ByUser = () => {
  const { userList, user, setUser, userDetails, setUserDetails, chosen, setChosen } =
    useContext(SettingsContext);

  return (
    <ListWrapper>
      <ScrollPanel>
        <DataTable
          value={userList.filter((use) => use.userName === chosen.userName)}
          className="p-datatable-striped"
          selectionMode="single"
          selection={chosen.userName}
          onSelectionChange={(e) => setChosen(...chosen, e.value)}
          dataKey="id"
        >
          <Column
            field="userName"
            header="User"
            sortable
            filter
            filterPlaceholder="user"
          ></Column>
          <Column
            field="locName"
            header="Location"
            sortable
            filter
            filterPlaceholder="location"
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

export default ByUser;
