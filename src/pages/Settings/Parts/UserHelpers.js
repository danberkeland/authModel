import { Auth, Hub } from "aws-amplify";
import { API, graphqlOperation } from "aws-amplify";
import { updateLocation } from "../../../graphql/mutations";


//  Checks for and, if exists, returns full Cognito object for user
export const saveLocInfo= async (data, form) => {
  console.log("data",data)
  console.log("form",form)
  
  try {
    await API.graphql(
      graphqlOperation(updateLocation, { input: { ...data } })
    );
  } catch (error) {
    console.log("error on updating products", error);
  }
};
