import gql from "graphql-tag";
import TopicFragment from "../fragments/topic";

const CREATE_TOPIC = gql`mutation(
  $title: String,
  $links: [CreateLinkInput]
) {
  createTopic(data: {
    title: $title,
    links: $links
  }) {
    ...TopicContent
  }
}
${TopicFragment}
`

export default CREATE_TOPIC;
