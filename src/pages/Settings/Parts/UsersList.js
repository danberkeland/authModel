import React, { useContext, useState } from "react";

import styled from "styled-components";

import { UserPageContext } from "../UserPageContext";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ScrollPanel } from "primereact/scrollpanel";
import { FilterMatchMode, FilterOperator } from 'primereact/api';

const ListWrapper = styled.div`
  font-family: "Montserrat", sans-serif;
  width: 100%;
  
 
  background: #ffffff;
`;









const UsersList = () => {

  const [ selectedUser, setSelectedUser ] = useState('');
  const [filters, setFilters] = useState({
    'userName': { value: null, matchMode: FilterMatchMode.CONTAINS },
    'loc': { value: null, matchMode: FilterMatchMode.CONTAINS },  
});

  const customers = [
    { userName: "Dan Berkeland", loc: "Back Porch Bakery" },
    { userName: "James Whitaker", loc: "Kreuzberg CA"},
    { userName: "James Whitaker", loc: "Kraken Avila"},
    { userName: "James Whitaker", loc: "Kraken Pismo"},
    { userName: "James Whitaker", loc: "Kraken Bonetti"},
    { userName: "Doobie Coates", loc: "High St. Osos" },
    { userName: "Doobie Coates", loc: "High Street Deli" },
    { userName: "Lexi", loc: "High Street Deli"},
    { userName: "Nate", loc: "High St. Osos"}
  ];

  let { chosen, setChosen } = useContext(UserPageContext)

  return (
    <ListWrapper>
      <ScrollPanel>
        <DataTable
          value={customers}
          className="p-datatable-striped"
          selectionMode="single"
          selection={selectedUser}
          onSelectionChange={e => setSelectedUser(e.event.userName)}
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
