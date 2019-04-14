import client from 'modules/graphql';

import GET_TOPIC from 'modules/graphql/queries/topic';
import CREATE_TOPIC from 'modules/graphql/mutations/createTopic';
import UPDATE_TOPIC_TITLE from 'modules/graphql/mutations/updateTopicTitle';
import CREATE_LINK from 'modules/graphql/mutations/createLink';
import DELETE_LINK from 'modules/graphql/mutations/deleteLink';
import ADD_TAG from 'modules/graphql/mutations/addTag';
import REMOVE_TAG from 'modules/graphql/mutations/removeTag';
import UPDATE_LINK_TITLE from '../graphql/mutations/updateLinkTitle';


const getTopic = async ({id}) => {
  let {data: { topic }} = await client.query({
    query: GET_TOPIC,
    variables: {
      id
    }
  })
  return topic
}

const createTopic = async ({title, links}) => {
  let {data: { createTopic }} = await client.mutate({
    mutation: CREATE_TOPIC,
    variables: {
      title,
      links
    }
  })
  return createTopic;
}

const updateTitle = async ({id, title}) => {
  let {data: { updateTopicTitle }} = await client.mutate({
    mutation: UPDATE_TOPIC_TITLE,
    variables: {
      id,
      title
    }
  })
  return updateTopicTitle;
}

const createLink = async ({topic_id, title, url, tags}) => {
  let {data: { createLink }} = await client.mutate({
    mutation: CREATE_LINK,
    variables: {
      title,
      url,
      topic_id,
      tags
    }
  })
  return createLink;
}

const deleteLink = async ({id}) => {
  let {data: { deleteLink }} = await client.mutate({
    mutation: DELETE_LINK,
    variables: {
      id
    }
  })
  return deleteLink;
}

const addTag = async ({link_id, tags}) => {
  let {data: { addTag }} = await client.mutate({
    mutation: ADD_TAG,
    variables: {
      id: link_id,
      tags
    }
  })
  return addTag;
}

const removeTag = async ({link_id, tags}) => {
  let {data: { removeTag }} = await client.mutate({
    mutation: REMOVE_TAG,
    variables: {
      id: link_id,
      tags
    }
  })
  return removeTag;
}

const updateLinkTitle = async ({id, title}) => {
  let {data: { updateLinkTitle }} = await client.mutate({
    mutation: UPDATE_LINK_TITLE,
    variables: {
      id,
      title
    }
  })
  return updateLinkTitle;
}



export {
  getTopic,
  createTopic,
  updateTitle,
  createLink,
  deleteLink,
  addTag,
  removeTag,
  updateLinkTitle
}
