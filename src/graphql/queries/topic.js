import gql from "graphql-tag";
import TopicFragment from '../fragments/topic';

const GET_ALL_TOPICS = gql`query GetAllUsers {
  topics {
    ...TopicContent
  }
}
${TopicFragment}
`

export default GET_ALL_TOPICS;
