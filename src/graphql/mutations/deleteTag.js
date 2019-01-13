import gql from "graphql-tag";

const DELETE_TAG = gql`mutation($id: ID!) {
  deleteTag(data: {id: $id})
}`

export default DELETE_TAG;
