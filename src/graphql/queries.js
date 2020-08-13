/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSlackWorkspace = /* GraphQL */ `
  query GetSlackWorkspace($id: ID!) {
    getSlackWorkspace(id: $id) {
      title
      channels {
        id
        name
        name_normalized
        num_members
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listSlackWorkspaces = /* GraphQL */ `
  query ListSlackWorkspaces(
    $filter: ModelSlackWorkspaceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSlackWorkspaces(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        title
        channels {
          id
          name
          name_normalized
          num_members
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSlackChannel = /* GraphQL */ `
  query GetSlackChannel($id: ID!) {
    getSlackChannel(id: $id) {
      id
      name
      name_normalized
      num_members
      createdAt
      updatedAt
    }
  }
`;
export const listSlackChannels = /* GraphQL */ `
  query ListSlackChannels(
    $filter: ModelSlackChannelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSlackChannels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        name_normalized
        num_members
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSlackMessage = /* GraphQL */ `
  query GetSlackMessage($id: ID!) {
    getSlackMessage(id: $id) {
      text
      client_msg_id
      type
      user
      createdAt
      updatedAt
    }
  }
`;
export const listSlackMessages = /* GraphQL */ `
  query ListSlackMessages(
    $filter: ModelSlackMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSlackMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        text
        client_msg_id
        type
        user
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
