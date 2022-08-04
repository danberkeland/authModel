import { Auth, Hub } from "aws-amplify";
import { API, graphqlOperation } from "aws-amplify";


//  Checks for and, if exists, returns full Cognito object for user
export const saveLocInfo= async (data, form) => {
  console.log("data",data)
  console.log("form",form)
};
