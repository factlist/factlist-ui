import gql from "graphql-tag";
import LinkFragment from './link';

const TopicFragment = gql`fragment TopicContent on Topic {
  id,
  title,
  user_id,
  user {
    id,
    username,
    name,
    email
  },
  links {
    ...LinkContent
  }
}
${LinkFragment}
`

export default TopicFragment;
