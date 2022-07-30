/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createLocation = /* GraphQL */ `
  mutation CreateLocation(
    $input: CreateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    createLocation(input: $input, condition: $condition) {
      locNick
      locName
      subs {
        items {
          id
          locationID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
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
      subs {
        items {
          id
          locationID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
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
      subs {
        items {
          id
          locationID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
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
      name
      email
      phone
      sub
      locs {
        items {
          id
          locationID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
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
      name
      email
      phone
      sub
      locs {
        items {
          id
          locationID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
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
      name
      email
      phone
      sub
      locs {
        items {
          id
          locationID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createRequest = /* GraphQL */ `
  mutation CreateRequest(
    $input: CreateRequestInput!
    $condition: ModelRequestConditionInput
  ) {
    createRequest(input: $input, condition: $condition) {
      id
      name
      loc
      createdAt
      updatedAt
    }
  }
`;
export const updateRequest = /* GraphQL */ `
  mutation UpdateRequest(
    $input: UpdateRequestInput!
    $condition: ModelRequestConditionInput
  ) {
    updateRequest(input: $input, condition: $condition) {
      id
      name
      loc
      createdAt
      updatedAt
    }
  }
`;
export const deleteRequest = /* GraphQL */ `
  mutation DeleteRequest(
    $input: DeleteRequestInput!
    $condition: ModelRequestConditionInput
  ) {
    deleteRequest(input: $input, condition: $condition) {
      id
      name
      loc
      createdAt
      updatedAt
    }
  }
`;
export const createLocationUser = /* GraphQL */ `
  mutation CreateLocationUser(
    $input: CreateLocationUserInput!
    $condition: ModelLocationUserConditionInput
  ) {
    createLocationUser(input: $input, condition: $condition) {
      id
      locationID
      userID
      location {
        locNick
        locName
        subs {
          nextToken
        }
        createdAt
        updatedAt
      }
      user {
        name
        email
        phone
        sub
        locs {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateLocationUser = /* GraphQL */ `
  mutation UpdateLocationUser(
    $input: UpdateLocationUserInput!
    $condition: ModelLocationUserConditionInput
  ) {
    updateLocationUser(input: $input, condition: $condition) {
      id
      locationID
      userID
      location {
        locNick
        locName
        subs {
          nextToken
        }
        createdAt
        updatedAt
      }
      user {
        name
        email
        phone
        sub
        locs {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteLocationUser = /* GraphQL */ `
  mutation DeleteLocationUser(
    $input: DeleteLocationUserInput!
    $condition: ModelLocationUserConditionInput
  ) {
    deleteLocationUser(input: $input, condition: $condition) {
      id
      locationID
      userID
      location {
        locNick
        locName
        subs {
          nextToken
        }
        createdAt
        updatedAt
      }
      user {
        name
        email
        phone
        sub
        locs {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
