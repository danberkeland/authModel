/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAuthType = /* GraphQL */ `
  mutation CreateAuthType(
    $input: CreateAuthTypeInput!
    $condition: ModelAuthTypeConditionInput
  ) {
    createAuthType(input: $input, condition: $condition) {
      sub
      loc
      authType
      createdAt
      updatedAt
    }
  }
`;
export const updateAuthType = /* GraphQL */ `
  mutation UpdateAuthType(
    $input: UpdateAuthTypeInput!
    $condition: ModelAuthTypeConditionInput
  ) {
    updateAuthType(input: $input, condition: $condition) {
      sub
      loc
      authType
      createdAt
      updatedAt
    }
  }
`;
export const deleteAuthType = /* GraphQL */ `
  mutation DeleteAuthType(
    $input: DeleteAuthTypeInput!
    $condition: ModelAuthTypeConditionInput
  ) {
    deleteAuthType(input: $input, condition: $condition) {
      sub
      loc
      authType
      createdAt
      updatedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      sub
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      sub
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      sub
      createdAt
      updatedAt
    }
  }
`;
export const createLocation = /* GraphQL */ `
  mutation CreateLocation(
    $input: CreateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    createLocation(input: $input, condition: $condition) {
      locNick
      locName
      subs
      createdAt
      updatedAt
    }
  }
`;
export const updateLocation = /* GraphQL */ `
  mutation UpdateLocation(
    $input: UpdateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    updateLocation(input: $input, condition: $condition) {
      locNick
      locName
      subs
      createdAt
      updatedAt
    }
  }
`;
export const deleteLocation = /* GraphQL */ `
  mutation DeleteLocation(
    $input: DeleteLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    deleteLocation(input: $input, condition: $condition) {
      locNick
      locName
      subs
      createdAt
      updatedAt
    }
  }
`;
