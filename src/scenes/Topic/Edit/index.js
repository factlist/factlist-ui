import React from 'react'
import TopicForm from 'components/TopicForm'

const EditTopic = (props) => {
  return (<TopicForm id={props.match.params.id}/>);
}

export default EditTopic;
