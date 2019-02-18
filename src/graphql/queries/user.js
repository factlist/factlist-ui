import gql from "graphql-tag";
import UserFragment from "../fragments/user";

const GET_USER = gql`query ($id: ID!) {
  getUserById(id: $id) {
    id,
    name,
    email,
    username,
    topics {
      id,
      title,
      user_id,
      links {
        id,
        description,
        url,
        tags {
          id,
          title
        }
      }
    },
  }
}
`

export const GET_USER_BY_USERNAME = gql`query ($username: String!) {
  user(username: $username) {
    ...UserInfo
  }
}
${UserFragment}
`

export const GET_ALL_USERS = gql`query {
  users {
    ...UserInfo
  }
}
${UserFragment}
`

export default GET_USER;
