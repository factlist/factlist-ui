import gql from "graphql-tag";
import UserFragment from "../fragments/user";

const GET_USER = gql`query ($id: ID!) {
  user(id: $id) {
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
