import gql from 'graphql-tag'
import client from '.'


const
  extendedTopicFields = `
    id
    title
    user {id, username, name, email}
    links {id, title, url, tags {id, title}}
  `


export const getUser = ({id}) =>
  client.query({
    variables: {id},
    query: gql`query($id: ID!) {
      getUserById(id: $id) {
        id, name, email, username, topics {
          id, title, user_id, links {
            id, title, url, tags {id, title}
          }
        }
      }
    }`,
  })
    .then(resp => resp.data.getUserById)


export const getTopic = ({id}) =>
  client.query({
    variables: {id},
    query: gql`query($id: ID!) {
      topic(id: $id) {
        id
        title
        links {id, title, url, tags {id, title}}
      }
    }`,
  })
    .then(resp => resp.data.topic)


export const getAllTopics = () =>
  client.query({
    query: gql`query {topics {${extendedTopicFields}}}`,
  })
    .then(resp => resp.data.topics)


export const createTopic = ({title, links}) =>
  client.mutate({
    variables: {title, links},
    mutation: gql`mutation(
      $title: String
      $links: [CreateLinkInput]
    ) {
      createTopic(data: {
        title: $title
        links: $links
      }) {
        ${extendedTopicFields}
      }
    }`,
  })
    .then(resp => resp.data.createTopic)


export const updateTitle = ({id, title}) =>
  client.mutate({
    variables: {id, title},
    mutation: gql`mutation(
      $id: ID!
      $title: String!
    ) {
      updateTopicTitle(data: {
        id: $id
        title: $title
      }) {
        ${extendedTopicFields}
      }
    }`,
  })
    .then(resp => resp.data.updateTopicTitle)


export const createLink = ({topic_id, title, url, tags}) =>
  client.mutate({
    variables: {topic_id, title, url, tags},
    mutation: gql`mutation(
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
    }`,
  })
    .then(resp => resp.data.createLink)


export const addTag = ({link_id, tags}) =>
  client.mutate({
    variables: {link_id, tags},
    mutation: gql`mutation(
      $link_id: ID!
      $tags: [CreateTagInput!]!
    ) {
      addTag(data: {
        id: $link_id
        tags: $tags
      }) {
        id, title
      }
    }`,
  })
    .then(resp => resp.data.addTag)


export const removeTag = ({link_id, tags}) =>
  client.mutate({
    variables: {link_id, tags},
    mutation: gql`mutation(
      $link_id: ID!
      $tags: [DeleteTagInput!]!
    ) {
      removeTag(data: {
        id: $link_id
        tags: $tags
      })
    }`,
  })
    .then(resp => resp.data.removeTag)
