import gql from "graphql-tag";

const DELETE_LINK = gql`mutation($id: ID!) {
  deleteLink(data: {id: $id})
}`

export default DELETE_LINK;
