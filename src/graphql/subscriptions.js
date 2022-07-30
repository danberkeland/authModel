/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateLocation = /* GraphQL */ `
  subscription OnCreateLocation {
    onCreateLocation {
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
export const onUpdateLocation = /* GraphQL */ `
  subscription OnUpdateLocation {
    onUpdateLocation {
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
export const onDeleteLocation = /* GraphQL */ `
  subscription OnDeleteLocation {
    onDeleteLocation {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateRequest = /* GraphQL */ `
  subscription OnCreateRequest {
    onCreateRequest {
      id
      name
      loc
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateRequest = /* GraphQL */ `
  subscription OnUpdateRequest {
    onUpdateRequest {
      id
      name
      loc
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteRequest = /* GraphQL */ `
  subscription OnDeleteRequest {
    onDeleteRequest {
      id
      name
      loc
      createdAt
      updatedAt
    }
  }
`;
export const onCreateLocationUser = /* GraphQL */ `
  subscription OnCreateLocationUser {
    onCreateLocationUser {
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
export const onUpdateLocationUser = /* GraphQL */ `
  subscription OnUpdateLocationUser {
    onUpdateLocationUser {
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
export const onDeleteLocationUser = /* GraphQL */ `
  subscription OnDeleteLocationUser {
    onDeleteLocationUser {
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
