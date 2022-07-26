import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Splash } from "./Splash";
import UserApplyForm from "./UserApplyForm";


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
