import gql from "graphql-tag";

const DELETE_TOPIC = gql`mutation($id: ID!) {
  deleteTopic(data: {id: $id})
}`

export default DELETE_TOPIC;
