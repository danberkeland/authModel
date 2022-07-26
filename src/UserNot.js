import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Card } from "primereact/card";
import { Button } from "primereact/button";

import UserApplyForm from "./UserApplyForm";

import styled from "styled-components";


const BasicContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid lightblue;
  padding: 20px 20px;
  box-sizing: border-box;
  position: absolute;
  top: 40%;
  left: 50%;
  -moz-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media only screen and (min-width: 500px) {
    width: 70%;
  }
  
  @media only screen and (min-width: 1000px) {
    width: 40%;
  }

`;


function Splash() {
  return (
    <BasicContainer>
      <div>Sign in</div>
      <div>
        Don't have an account?{" "}
        <Button
          className="p-button-text"
          onClick={() => {
            window.location = "/UserApply";
          }}
        >
          APPLY NOW
        </Button>
      </div>
      <div>Email Address</div>
      <div>Password</div>
      <div>Forgot password?</div>
      <div>Sign in</div>
    </BasicContainer>
  );
}

function UserNot() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/UserApply" element={<UserApplyForm />} />
      </Routes>
    </Router>
  );
}

export default UserNot;
