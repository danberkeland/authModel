export const listLocationUsers = /* GraphQL */ `
  query ListLocationUsers(
    $filter: ModelLocationUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLocationUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        authType
        location {
          locName
        }
        user {
          name
          sub
        }
      }
    }
  }
`;
