/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAuthType = /* GraphQL */ `
  query GetAuthType($sub: String!, $loc: String!) {
    getAuthType(sub: $sub, loc: $loc) {
      sub
      loc
      authType
      createdAt
      updatedAt
    }
  }
`;
export const listAuthTypes = /* GraphQL */ `
  query ListAuthTypes(
    $sub: String
    $loc: ModelStringKeyConditionInput
    $filter: ModelAuthTypeFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listAuthTypes(
      sub: $sub
      loc: $loc
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        sub
        loc
        authType
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      sub
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        sub
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLocation = /* GraphQL */ `
  query GetLocation($locNick: String!) {
    getLocation(locNick: $locNick) {
      locNick
      locName
      subs
      createdAt
      updatedAt
    }
  }
`;
export const listLocations = /* GraphQL */ `
  query ListLocations(
    $locNick: String
    $filter: ModelLocationFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listLocations(
      locNick: $locNick
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        locNick
        locName
        subs
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
