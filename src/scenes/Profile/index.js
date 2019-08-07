import React from "react";
import { compose } from "recompose";
import { withUser, withGraphql } from "adapters";
import gql from "graphql-tag";
import { Flex, Box } from "@rebass/grid";
import {
  Layout,
  Slack,
  Footer,
  Topic,
  Separator,
  RefinementList,
  RadioList,
  UserCard
} from "components";
import cm from "./profile.module.css";

export const getTopicsQuery = gql`
  query {
    topics {
      id
      title
      user {
        id
        username
        name
        email
      }
      links {
        id
        title
        url
        tags {
          id
          title
        }
      }
    }
  }
`;

const ProfileScene = ({ data, user }) => {
  const userData = user.state.user;
  console.log(userData);
  return (
    <Layout>
      <Flex justifyContent="center">
        <Box className={cm.profileContainer}>
          <UserCard user={userData} />
        </Box>
      </Flex>
      <Flex justifyContent="center">
        <Flex justifyContent="flex-end" className={cm.filters}>
          <Box className={cm.filter}>filter 1</Box>
          <Box className={cm.filter}>filter 2</Box>
        </Flex>
      </Flex>
      <Flex justifyContent="center">
        <Box className={cm.box}>
          <Flex flexDirection="column">
            {data &&
              data.networkStatus === 7 &&
              userData.topics.map(topic => (
                <Topic key={topic.id} topic={topic} isEdit={false} />
              ))}
          </Flex>
        </Box>
      </Flex>
    </Layout>
  );
};

export default compose(
  withUser,
  withGraphql(getTopicsQuery, {
    skip: props => !props.user.state.token
  })
)(ProfileScene);
