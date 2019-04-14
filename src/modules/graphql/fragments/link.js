import gql from "graphql-tag";

const LinkFragment = gql`fragment LinkContent on Link {
  id,
  title,
  url,
  topic_id,
  tags {
    id,
    title
  }
}
`

export default LinkFragment;
