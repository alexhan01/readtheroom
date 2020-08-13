/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSlackWorkspace = /* GraphQL */ `
  subscription OnCreateSlackWorkspace {
    onCreateSlackWorkspace {
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
export const onUpdateSlackWorkspace = /* GraphQL */ `
  subscription OnUpdateSlackWorkspace {
    onUpdateSlackWorkspace {
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
export const onDeleteSlackWorkspace = /* GraphQL */ `
  subscription OnDeleteSlackWorkspace {
    onDeleteSlackWorkspace {
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
export const onCreateSlackChannel = /* GraphQL */ `
  subscription OnCreateSlackChannel {
    onCreateSlackChannel {
      id
      name
      name_normalized
      num_members
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSlackChannel = /* GraphQL */ `
  subscription OnUpdateSlackChannel {
    onUpdateSlackChannel {
      id
      name
      name_normalized
      num_members
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSlackChannel = /* GraphQL */ `
  subscription OnDeleteSlackChannel {
    onDeleteSlackChannel {
      id
      name
      name_normalized
      num_members
      createdAt
      updatedAt
    }
  }
`;
export const onCreateSlackMessage = /* GraphQL */ `
  subscription OnCreateSlackMessage {
    onCreateSlackMessage {
      text
      client_msg_id
      type
      user
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSlackMessage = /* GraphQL */ `
  subscription OnUpdateSlackMessage {
    onUpdateSlackMessage {
      text
      client_msg_id
      type
      user
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSlackMessage = /* GraphQL */ `
  subscription OnDeleteSlackMessage {
    onDeleteSlackMessage {
      text
      client_msg_id
      type
      user
      createdAt
      updatedAt
    }
  }
`;
