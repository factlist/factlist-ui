import gql from "graphql-tag";
import LinkFragment from "../fragments/link";

const CREATE_LINK = gql`mutation(
  $title: String!,
  $url: String!,
  $topic_id: ID!,
  $tags: [CreateTagInput]
) {
  createLink(data: {
    title: $title,
    url: $url,
    topic_id: $topic_id,
    tags: $tags
  }) {
    ...LinkContent
  }
}
${LinkFragment}
`

export default CREATE_LINK;
