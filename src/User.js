import { useContext } from "react";
import { Auth } from "aws-amplify";


import { UserProvider } from "./Auth/UserContext";

import { Button } from "primereact/button";
import { UserContext } from "./Auth/UserContext";



function User() {

  const { formData, setFormData, setFormType, setUser, user } = useContext(UserContext);

  const signOut = async () => {
    await Auth.signOut().then(e => setFormType("onNoUser"))
  }

  return (
    <UserProvider>
      <div>There is a User({user.username})</div>
      <Button onClick={signOut}>Sign Out</Button>
    </UserProvider>
  );
}

export default User;
