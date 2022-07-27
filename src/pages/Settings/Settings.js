import React, { useState } from "react";

import { Button } from "primereact/button";

import { Sidebar } from "primereact/sidebar";

function Settings() {
  
const [visible, setVisible] = useState(false)
  return (
    <React.Fragment>
      <Sidebar
        visible={visible}
        position="right"
        className="p-sidebar-md"
        blockScroll={false}
        onHide={() => setVisible(false)}
      >
      </Sidebar>
      <div>Manage Users</div>
      <Button
          label="Create User"
          className="p-button-rounded p-button-outlined"
          aria-label="Create User"
          onClick={(e) => setVisible(true)}
        />

    </React.Fragment>
   
  );
}

export default Settings;
