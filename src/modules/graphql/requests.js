import gql from 'graphql-tag'


const extendedTopicFields = `
  id
  title
  user {id, username, name, email}
  links {id, title, url, tags {id, title}}
`

export const getUser = gql`query($id: ID!) {
  getUserById(id: $id) {
    id, name, email, username, topics {
      id, title, user_id, links {
        id, title, url, tags {id, title}
      }
    }
  }
}`

export const getTopic = gql`query($id: ID!) {
  topic(id: $id) {
    id, title, links {
      id, title, url, tags {id, title}
    }
  }
}`

export const getAllTopics = gql`query {topics {${extendedTopicFields}}}`

export const createTopic = gql`mutation(
  $title: String
  $links: [CreateLinkInput]
) {
  createTopic(data: {
    title: $title
    links: $links
  }) {
    ${extendedTopicFields}
  }
}`

export const updateTitle = gql`mutation(
  $id: ID!
  $title: String!
) {
  updateTopicTitle(data: {
    id: $id
    title: $title
  }) {
    ${extendedTopicFields}
  }
}`

export const createLink = gql`mutation(
  $topic_id: ID!
  $title: String!
  $url: String!
  $tags: [CreateTagInput]
) {
  createLink(data: {
    topic_id: $topic_id
    title: $title
    url: $url
    tags: $tags
  }) {
    id, title, url, tags {id, title}
  }
}`

export const addTag = gql`mutation(
  $link_id: ID!
  $tags: [CreateTagInput!]!
) {
  addTag(data: {
    id: $link_id
    tags: $tags
  }) {
    id, title
  }
}`

export const removeTag = gql`mutation(
  $link_id: ID!
  $tags: [DeleteTagInput!]!
) {
  removeTag(data: {
    id: $link_id
    tags: $tags
  })
}`
