import gql from "graphql-tag";

const TagFragment = gql`fragment TagContent on Tag {
  id,
  title
}
`

export default TagFragment;
