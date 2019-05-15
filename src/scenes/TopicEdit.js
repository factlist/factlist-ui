import React from 'react'
import {TopicForm} from 'components'


const EditTopic = ({match}) => <TopicForm id={match.params.id} />

export default EditTopic
