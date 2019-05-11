import React from 'react'
import TopicForm from 'containers/Topic/Form'

const EditTopic = (props) => {
  return (<TopicForm id={props.match.params.id}/>);
}

export default EditTopic;
