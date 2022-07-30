import React, { useContext } from "react";

import { UserPageContext } from "../../../Contexts/SettingsContext";

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputMask } from "primereact/inputmask";

const UserInfo = ({ setVisible, dis }) => {
  let { chosen, setChosen } = useContext(UserPageContext);

  return (
    <React.Fragment>
      <h2>
        <i className="pi pi-user"></i> User Name
      </h2>
      {dis && (
        <Button
          label="Edit"
          className="p-button-rounded p-button-outlined"
          aria-label="Submit"
          onClick={(e) => setVisible(true)}
        />
      )}
      {!dis && (
        <Button
          label="Submit"
          className="p-button-rounded p-button-outlined"
          aria-label="Submit"
          onClick={(e) => setVisible(true)}
        />
      )}
      <div className="p-inputgroup">
        <span className="p-inputgroup-addon">
          <label htmlFor="custName">Location Name</label>
          <br />
        </span>

        <InputText id="custName" disabled={dis} />
      </div>
      <br />

      <div className="p-inputgroup">
        <span className="p-inputgroup-addon">
          <label htmlFor="nickName">Nickname</label>
          <br />
        </span>

        <InputText
          id="nickName"
          disabled={dis}
          value={chosen}
          onChange={(e) => setChosen(e.target.value)}
        />
      </div>
      <br />

      <h2>
        <i className="pi pi-phone"></i> Primary Contact
      </h2>

      <div className="p-inputgroup">
        <span className="p-inputgroup-addon">
          <label htmlFor="firstName"> First Name</label>
          <br />
        </span>

        <InputText id="firstName" disabled={dis} />
      </div>
      <br />
      <div className="p-inputgroup">
        <span className="p-inputgroup-addon">
          <label htmlFor="lastName"> Last Name</label>
          <br />
        </span>

        <InputText id="lastName" disabled={dis} />
      </div>
      <br />
      <div className="p-inputgroup">
        <span className="p-inputgroup-addon">
          <label htmlFor="email"> Email</label>
          <br />
        </span>

        <InputText id="email" disabled={dis} />
      </div>
      <br />

      <div className="p-inputgroup">
        <span className="p-inputgroup-addon">
          <label htmlFor="phone"> Phone</label>
          <br />
        </span>

        <InputMask mask="999-999-9999" id="phone" disabled={dis} />
      </div>
      <br />
      
      <br />
    </React.Fragment>
  );
};

export default UserInfo;
