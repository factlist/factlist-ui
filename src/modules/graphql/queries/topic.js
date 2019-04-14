import gql from "graphql-tag";
import TopicFragment from '../fragments/topic';

const GET_TOPIC = gql`query($id: ID!) {
  topic (id: $id) {
    id,
    title,
    links {
      id
      url
      title
      tags {
        id
        title
      }
    }
  }
}`

export const GET_ALL_TOPICS = gql`query GetAllUsers {
  topics {
    ...TopicContent
  }
}
${TopicFragment}
`

export default GET_TOPIC;
