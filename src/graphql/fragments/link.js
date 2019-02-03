import gql from "graphql-tag";

const LinkFragment = gql`fragment LinkContent on Link {
  id,
  description,
  url,
  topic_id,
  tags {
    id,
    title
  }
}
`

export default LinkFragment;
