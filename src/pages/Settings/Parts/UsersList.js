import React, { useContext, useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";

import styled from "styled-components";

import { SettingsContext } from "../../../Contexts/SettingsContext.js";

import { listLocationUsers } from "../../../customGraphQL/listCustomerLocSub";

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
  const {
    userList,
    user,
    setUser,
    setAuthType,
    userDetails,
    setUserDetails,
    chosen,
    setChosen,
  } = useContext(SettingsContext);

  const [filters, setFilters] = useState({
    userName: { value: null, matchMode: FilterMatchMode.CONTAINS },
    loc: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });

  useEffect(() => {
    /*
    console.log("chosen", chosen);
    console.log("sub", userDetails.sub);
    (chosen && userDetails) && API.graphql(
      graphqlOperation(listLocationUsers, {
        filter: { locationID: { eq: chosen }, userID: { eq: userDetails.sub } },
      })
    ).then(sub => console.log("sub2",sub));
    */
  }, [chosen]);

  return (
    <ListWrapper>
      <ScrollPanel>
        <DataTable
          value={userList}
          className="p-datatable-striped"
          selectionMode="single"
          selection={user.userName}
          onSelectionChange={(e) => {
            console.log("setUser", e);
            setChosen(e.value.loc);
            setUserDetails({ ...userDetails, chosen: e.value.loc });
            setAuthType(e.value.authType);
            setUser(e.value);
          }}
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
