import React, { Fragment } from 'react';
import { Mutation } from "react-apollo";
import Topic from '../../containers/Topic'
import { connect } from 'react-redux'
import TopNavigation from 'components/TopNavigation';

import CREATE_TOPIC from '../../graphql/mutations/createTopic';
class NewTopic extends React.Component {
  onClickSave() { //TODO
    console.log('saved')
  }

  render() {
    return (
      <Fragment>
        <TopNavigation onClickSave={this.onClickSave} />
        <Mutation mutation={CREATE_TOPIC}>
          {(createTopic, { data }) => (
            <Topic setIsEdit />
          )}
        </Mutation>
      </Fragment>
    )
  }
}

export default connect()(NewTopic);
