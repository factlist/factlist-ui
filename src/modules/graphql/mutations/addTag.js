import gql from "graphql-tag";
import TagFragment from "../fragments/tag";

const ADD_TAG = gql`mutation(
  $id: ID!,
  $tags: [CreateTagInput!]!
) {
  addTag(data: {
    id: $id,
    tags: $tags
  }) {
    ...TagContent
  }
}
${TagFragment}
`

export default ADD_TAG;
