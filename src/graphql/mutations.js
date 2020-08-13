/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSlackWorkspace = /* GraphQL */ `
  mutation CreateSlackWorkspace(
    $input: CreateSlackWorkspaceInput!
    $condition: ModelSlackWorkspaceConditionInput
  ) {
    createSlackWorkspace(input: $input, condition: $condition) {
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
export const updateSlackWorkspace = /* GraphQL */ `
  mutation UpdateSlackWorkspace(
    $input: UpdateSlackWorkspaceInput!
    $condition: ModelSlackWorkspaceConditionInput
  ) {
    updateSlackWorkspace(input: $input, condition: $condition) {
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
export const deleteSlackWorkspace = /* GraphQL */ `
  mutation DeleteSlackWorkspace(
    $input: DeleteSlackWorkspaceInput!
    $condition: ModelSlackWorkspaceConditionInput
  ) {
    deleteSlackWorkspace(input: $input, condition: $condition) {
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
export const createSlackChannel = /* GraphQL */ `
  mutation CreateSlackChannel(
    $input: CreateSlackChannelInput!
    $condition: ModelSlackChannelConditionInput
  ) {
    createSlackChannel(input: $input, condition: $condition) {
      id
      name
      name_normalized
      num_members
      createdAt
      updatedAt
    }
  }
`;
export const updateSlackChannel = /* GraphQL */ `
  mutation UpdateSlackChannel(
    $input: UpdateSlackChannelInput!
    $condition: ModelSlackChannelConditionInput
  ) {
    updateSlackChannel(input: $input, condition: $condition) {
      id
      name
      name_normalized
      num_members
      createdAt
      updatedAt
    }
  }
`;
export const deleteSlackChannel = /* GraphQL */ `
  mutation DeleteSlackChannel(
    $input: DeleteSlackChannelInput!
    $condition: ModelSlackChannelConditionInput
  ) {
    deleteSlackChannel(input: $input, condition: $condition) {
      id
      name
      name_normalized
      num_members
      createdAt
      updatedAt
    }
  }
`;
export const createSlackMessage = /* GraphQL */ `
  mutation CreateSlackMessage(
    $input: CreateSlackMessageInput!
    $condition: ModelSlackMessageConditionInput
  ) {
    createSlackMessage(input: $input, condition: $condition) {
      text
      client_msg_id
      type
      user
      createdAt
      updatedAt
    }
  }
`;
export const updateSlackMessage = /* GraphQL */ `
  mutation UpdateSlackMessage(
    $input: UpdateSlackMessageInput!
    $condition: ModelSlackMessageConditionInput
  ) {
    updateSlackMessage(input: $input, condition: $condition) {
      text
      client_msg_id
      type
      user
      createdAt
      updatedAt
    }
  }
`;
export const deleteSlackMessage = /* GraphQL */ `
  mutation DeleteSlackMessage(
    $input: DeleteSlackMessageInput!
    $condition: ModelSlackMessageConditionInput
  ) {
    deleteSlackMessage(input: $input, condition: $condition) {
      text
      client_msg_id
      type
      user
      createdAt
      updatedAt
    }
  }
`;
