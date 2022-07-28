import React, { useContext, useState } from "react";

import styled from "styled-components";

import { UserPageContext } from "../UserPageContext";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ScrollPanel } from "primereact/scrollpanel";

const ListWrapper = styled.div`
  font-family: "Montserrat", sans-serif;
  width: 100%;
  background: #ffffff;
`;

const ByLocation = () => {
  const { userList, setSelectedUserList, user, setUser } =
    useContext(UserPageContext);

  return (
    <ListWrapper>
      <ScrollPanel>
        <DataTable
          value={userList.filter((use) => use.loc === user.loc)}
          className="p-datatable-striped"
          selectionMode="single"
          selection={user.userName}
          onSelectionChange={(e) => setUser(e.value)}
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
            field="loc"
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
        </DataTable>
      </ScrollPanel>
    </ListWrapper>
  );
};

export default ByLocation;
