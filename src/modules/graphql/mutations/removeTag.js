import gql from "graphql-tag";

const REMOVE_TAG = gql`mutation(
  $id: ID!,
  $tags: [DeleteTagInput!]!
) {
  removeTag(data: {
    id: $id,
    tags: $tags
  })
}`

export default REMOVE_TAG;
