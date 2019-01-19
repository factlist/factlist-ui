import gql from "graphql-tag";

const UPDATE_TOPIC = gql`mutation(
  $id: ID!,
  $title: String!
) {
  updateTopic(data: {id: $id, title: $title})
}`

export default UPDATE_TOPIC;
