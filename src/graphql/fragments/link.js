import gql from "graphql-tag";
import TopicFragment from "./topic";

const LinkFragment = gql`fragment LinkContent on Link {
  id,
  title,
  url,
  topic_id,
  topic {
    ...TopicContent
  },
  tags {
    id,
    title
  }
}
${TopicFragment}
`

export default LinkFragment;
