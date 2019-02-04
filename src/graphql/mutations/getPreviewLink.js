import gql from "graphql-tag";

const GET_PREVIEW_LINK = gql`mutation(
  $url: String!,
) {
  getPreviewLink(data: {
    url: $url,
  }) {
    description
  }
}`;

export default GET_PREVIEW_LINK;
