import React, { useState, useRef, useContext, useEffect } from "react";
import { Form, Field } from "react-final-form";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { SettingsContext } from "../../../Contexts/SettingsContext"

import { Dialog } from "primereact/dialog";

import { classNames } from "primereact/utils";

import { saveLocInfo } from "./UserHelpers";

import "../../../Auth/Splash.css";

export const LocationForm = ({ setVisible }) => {
  
  const { chosen, setChosen } = useContext(SettingsContext)

  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({});
  const [change, setChange] = useState(false);
  const [focusId, setFocusId] = useState("addr1");

  useEffect(() => {
    console.log("chosen", chosen)
  },[chosen])

  const { locName, locNick, addr1, addr2, city, zip, phone, email, zoneName } =
    chosen;

  const handleChange = (e) => {
    setFocusId(e.target.id);
    setChange(true);
  };

  const EntryField = ({ id, label }) => {
    return (
      <Field
        name={id}
        render={({ input, meta }) => (
          <div className="field">
            <span className="p-float-label">
              <InputText
                id={id}
                {...input}
                autoFocus={id === focusId ? true : false}
                onInput={handleChange}
                className={classNames({
                  "p-invalid": isFormFieldValid(meta),
                })}
              />
              <label
                htmlFor={id}
                className={classNames({
                  "p-error": isFormFieldValid(meta),
                })}
              >
                {label}
              </label>
            </span>
            {getFormErrorMessage(meta)}
          </div>
        )}
      />
    );
  };

  const onSubmit = (data) => {
    setChosen({...data})
    saveLocInfo(data);
    setChange(false)
    setVisible(false)
  };

  const validate = (data) => {
    let errors = {};

    if (!data.addr1) {
      errors.name = "Name is required.";
    }

    if (!data.email) {
      errors.email = "Email is required.";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
      errors.email = "Invalid email address. E.g. example@email.com";
    }

    return errors;
  };

  const isFormFieldValid = (meta) => !!(meta.touched && meta.error);
  const getFormErrorMessage = (meta) => {
    return (
      isFormFieldValid(meta) && <small className="p-error">{meta.error}</small>
    );
  };

  return (
    <div className="form-demo">
      <div className="flex justify-content-center">
        <div className="card">
          <h5 className="text-center">{locName}</h5>
          <Form
            onSubmit={onSubmit}
            initialValues={{
              locName: locName,
              locNick: locNick,
              addr1: addr1,
              addr2: addr2,
              city: city,
              email: email,
              zip: zip,
              phone: phone,
            }}
            validate={validate}
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit} className="p-fluid">
                <EntryField id="addr1" label="Address" />
                <EntryField id="addr2" label="Address" />
                <EntryField id="city" label="City" />
                <EntryField id="zip" label="Zip" />
                <EntryField id="phone" label="Phone" />
                <EntryField id="email" label="Email" />

                <Button
                  className={change ? "p-button-danger" : "p-button-success"}
                  type="submit"
                  label="Submit"
                />
              </form>
            )}
          />
        </div>
      </div>
    </div>
  );
};
