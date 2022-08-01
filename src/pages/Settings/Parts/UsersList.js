import React, { useContext, useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";

import styled from "styled-components";

import { SettingsContext } from "../../../Contexts/SettingsContext.js";
import { listAuth } from "../../../customGraphQL/queries.js";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ScrollPanel } from "primereact/scrollpanel";
import { FilterMatchMode } from "primereact/api";

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
    console.log("chosen", chosen.locNick);
    console.log("sub", userDetails);
    try {
      API.graphql(
        graphqlOperation(listAuth, {
          filter: {
            locationID: { eq: chosen.locNick },
            userID: { eq: userDetails.sub },
          },
        })
      )
        .then((sub) => {
          console.log("authTypeSub", sub);
          setAuthType(sub.data.listLocationUsers.items[0].authType);
        })
        .catch((err) => setAuthType(0));
    } catch (err) {
      console.log(err);
    }
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
            setChosen({
              locName: e.value.loc,
              locNick: e.value.locNick,
              userName: e.value.userName,
              sub: e.value.sub
            });
            setUserDetails({
              ...userDetails,
              locName: e.value.loc,
              locNick: e.value.locNick,
            });
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
            field="locName"
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
