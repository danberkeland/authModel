import React, { useContext, useState } from "react";

import styled from "styled-components";

import { UserPageContext } from "../UserPageContext";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ScrollPanel } from "primereact/scrollpanel";
import { FilterMatchMode, FilterOperator } from "primereact/api";

const ListWrapper = styled.div`
  font-family: "Montserrat", sans-serif;
  width: 100%;
  background: #ffffff;
`;

const UsersList = () => {
  const { userList, user, setUser } = useContext(UserPageContext);

  const [filters, setFilters] = useState({
    userName: { value: null, matchMode: FilterMatchMode.CONTAINS },
    loc: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });


  return (
    <ListWrapper>
      <ScrollPanel>
        <DataTable
          value={userList}
          className="p-datatable-striped"
          selectionMode="single"
          selection={user.userName}
          onSelectionChange={(e) => {
            console.log("setUser",e)
            setUser(e.value)}}
          dataKey="id"
          filterDisplay="row"
          filters={filters}
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
          
        </DataTable>
      </ScrollPanel>
    </ListWrapper>
  );
};

export default UsersList;
