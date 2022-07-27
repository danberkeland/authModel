
import React from "react";
import CustomerNews from "./pages/CustomerNews/CustomerNews";
import Ordering from "./pages/Ordering/Ordering";
import Products from "./pages/Products/Products";
import Settings from "./pages/Settings/Settings";

import { useContext } from "react";
import { Auth } from "aws-amplify";

import { Button } from "primereact/button";
import { UserContext } from "./Auth/UserContext";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function User() {
  const { setFormType } = useContext(UserContext);

  const signOut = async () => {
    await Auth.signOut().then((e) => setFormType("onNoUser"));
  };
  return (
    <Router>
      <div className="card">
       
        <Button onClick={signOut}>Sign Out</Button>

        <Routes>
          <Route path="/CustomerNews" element={<CustomerNews />} />
          <Route path="/Ordering" element={<Ordering />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default User;
