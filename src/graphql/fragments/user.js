import gql from "graphql-tag";
import TopicFragment from './topic';

const UserFragment = gql`fragment UserInfo on User {
  id,
  name,
  email,
  username,
  topics {
    ...TopicContent
  }
}
${TopicFragment}
`

export default UserFragment;
