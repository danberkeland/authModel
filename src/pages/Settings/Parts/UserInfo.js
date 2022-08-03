import React from "react";

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import { Button } from "primereact/button";

import {
  Title,
  SubInfo,
  MainWrapper,
} from "../../../CommonStyles";

export const UserInfo = ({ chosen }) => {
  const { locName, addr1, addr2, city, zip, phone, email, zoneName } = chosen;


  return (
    <MainWrapper>
      <Title>{locName}</Title>
      <div>
        <Button
          className="p-button-outlined p-button-rounded"
          label="Edit"
        ></Button>
      </div>

      <div>
        <SubInfo>{addr1}</SubInfo>
        <SubInfo>{addr2}</SubInfo>
        <SubInfo>{city}</SubInfo>
        <SubInfo>{zip}</SubInfo>
      </div>
      <div>
        <SubInfo>{phone}</SubInfo>
        <SubInfo>{email}</SubInfo>
        <SubInfo>{zoneName}</SubInfo>
      </div>
    </MainWrapper>
  );
};
