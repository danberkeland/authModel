
import { Amplify, Auth, Hub } from "aws-amplify";
import { API, graphqlOperation } from "aws-amplify";
import awsmobile from "../aws-exports";

import { getUser } from "../customGraphQL/queries";

Amplify.configure(awsmobile);

export const checkUser = async () => {
  try {
    console.log("currentAuthenticatedUser")
    let use = await Auth.currentAuthenticatedUser();
    return use;
  } catch (err) {
    console.log("Error AUthenticating User", err);
  }
};

export const fetchUserDetails = async (sub) => {
  try {
    console.log("getUser")
    let user = await API.graphql(graphqlOperation(getUser, { sub: sub }));
    return user.data.getUser;
  } catch (error) {
    console.log("error on fetching UserDetails List", error);
  }
};

export const setAuthListener = (setFormType) => {
  Hub.listen("auth", (data) => {
    switch (data.payload.event) {
      case "signOut":
        setFormType("onNoUser");
        break;
      default:
        break;
    }
  });
};
