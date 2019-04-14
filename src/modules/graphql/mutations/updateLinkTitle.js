import gql from "graphql-tag";
import LinkFragment from "../fragments/link";

const UPDATE_LINK_TITLE = gql`mutation(
  $id: ID!,
  $title: String!
) {
  updateLinkTitle(data: {id: $id, title: $title}){
    ...LinkContent
  }
}
${LinkFragment}
`

export default UPDATE_LINK_TITLE;
