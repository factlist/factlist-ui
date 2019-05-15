import React from 'react'
import { Flex, Box } from '@rebass/grid'
import cm from './slack.module.css'


const Slack = () =>
  <div className={cm.slack}>
    <Flex justifyContent="center" alignItems="center">
      <Box>
        <img
          src="images/slack.svg"
          title="Slack"
          alt='Slack'
        />
      </Box>

      <Box>
        <a href="/">Join our Slack community</a>
      </Box>
    </Flex>
  </div>

export default Slack
