import React, { Fragment } from 'react';
import { Mutation, Query } from "react-apollo";
import Topic from '../../containers/Topic/New'
import { connect } from 'react-redux'
import TopNavigation from 'components/TopNavigation';

import CREATE_TOPIC from '../../graphql/mutations/createTopic';
class NewTopic extends React.Component {
  onClickSave() {
    console.log('saved')
  }
  render() {
    const links = [
        { title: "LINK UI DENEME", url: "HTTPS://" },
        {
          title: "LINK UI DENEME2",
          url: "HTTPS://DENEME",
          tags: [{ title: "TAG TITLE" }, { title: "TAG TITLE2" }]
        }
      ];
    return (
      <Fragment>
        <TopNavigation onClickSave={this.onClickSave} />
        <Mutation mutation={CREATE_TOPIC}>
          {(createTopic, { data }) => (
            <Topic />
          )}
        </Mutation>
        {/*<Query></Query>*/}
      </Fragment>
    )
  }
}

export default connect()(NewTopic);
