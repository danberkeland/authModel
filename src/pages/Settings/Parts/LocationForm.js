import React, { useState } from "react";
import { Form, Field } from "react-final-form";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

import { Dialog } from "primereact/dialog";

import { classNames } from "primereact/utils";

import { saveLocInfo } from "./UserHelpers";

import "../../../Auth/Splash.css";

export const LocationForm = ({ chosen }) => {
  const { locName, addr1, addr2, city, zip, phone, email, zoneName } = chosen;

  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({});

  
  const onSubmit = (data, form) => {
    console.log("got here");
    saveLocInfo(data, form);
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
                <Field
                  name="addr1"
                  render={({ input, meta }) => (
                    <div className="field">
                      <span className="p-float-label">
                        <InputText
                          id="addr1"
                          {...input}
                          autoFocus
                          className={classNames({
                            "p-invalid": isFormFieldValid(meta),
                          })}
                        />
                        <label
                          htmlFor="addr1"
                          className={classNames({
                            "p-error": isFormFieldValid(meta),
                          })}
                        >
                          Address
                        </label>
                      </span>
                      {getFormErrorMessage(meta)}
                    </div>
                  )}
                />
                <Field
                  name="addr2"
                  render={({ input, meta }) => (
                    <div className="field">
                      <span className="p-float-label">
                        <InputText
                          id="addr2"
                          {...input}
                          autoFocus
                          
                        />
                        <label
                          htmlFor="addr2"
                          
                        >
                          Address
                        </label>
                      </span>
                      
                    </div>
                  )}
                />
                
                

                <Button type="submit" label="Submit" className="mt-2" />
              </form>
            )}
          />
        </div>
      </div>
    </div>
  );
};
