import gql from "graphql-tag";
import TopicFragment from "../fragments/topic";

const UPDATE_TOPIC_TITLE = gql`mutation(
  $id: ID!,
  $title: String!
) {
  updateTopicTitle(data: {
    id: $id,
    title: $title
  }) {
    ...TopicContent
  }
}
${TopicFragment}
`

export default UPDATE_TOPIC_TITLE;
