import gql from "graphql-tag";

const UPDATE_TAG = gql`mutation(
  $id: ID!,
  $title: String!
) {
  updateTag(data: {id: $id, title: $title})
}`

export default UPDATE_TAG;
