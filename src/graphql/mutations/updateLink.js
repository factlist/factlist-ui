import gql from "graphql-tag";

const UPDATE_LINK = gql`mutation(
  $id: ID!,
  $title: String!,
  $url: String!
) {
  updateLink(data: {id: $id, title: $title})
}`

export default UPDATE_LINK;
