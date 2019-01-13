import gql from "graphql-tag";
import UserFragment from "./user";
import LinkFragment from './link';

const TopicFragment = gql`fragment TopicContent on Topic {
  id,
  title,
  user_id,
  user {
    ...UserInfo
  },
  links {
    ...LinkContent
  }
}
${UserFragment}
${LinkFragment}
`

export default TopicFragment;
