import React from 'react';
import { Flex, Box } from '@rebass/grid';
import { Field, reduxForm } from 'redux-form';
import Input from 'components/Topic/Input';
import { ADD_TOPIC_FORM } from 'modules/topic/constants';

const TopicForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <Flex flexDirection="column">
      <Box width={1}>
        <Field
          id="topic"
          name="text"
          placeholder="New Topic"
          component={Input}
        />
      </Box>
    </Flex>
  </form>
);

export default reduxForm({
  form: ADD_TOPIC_FORM
})(TopicForm);
