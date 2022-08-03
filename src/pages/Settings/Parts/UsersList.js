import React, { useContext, useEffect, useState } from "react";

import styled from "styled-components";

import { SettingsContext } from "../../../Contexts/SettingsContext.js";
import { grabAuth } from "../../../Auth/AuthHelpers.js";

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
    setAuthType,
    userDetails,
    setUserDetails,
    chosen,
    setChosen,
  } = useContext(SettingsContext);

  const [filters, setFilters] = useState({
    locName: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });

  const [selected, setSelected] = useState(userDetails);

  const authorizedUserList = userList.filter((use) => use.sub === userDetails.sub)

  useEffect(() => {
    setChosen({
      locName: selected.locName,
      locNick: selected.locNick,
      userName: selected.userName,
      sub: selected.sub,
    });
    setUserDetails({
      ...userDetails,
      locName: selected.locName,
      locNick: selected.locNick,
    });
  }, [selected]);

  useEffect(() => {
    try {
      grabAuth(chosen.locNick, userDetails.sub)
        .then((sub) => {
          setAuthType(sub);
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
          value={authorizedUserList}
          className="p-datatable-striped"
          selectionMode="single"
          onSelectionChange={(e) => {
            setSelected(e.value);
          }}
          dataKey="id"
          filterDisplay="row"
          filters={filters}
        >
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
