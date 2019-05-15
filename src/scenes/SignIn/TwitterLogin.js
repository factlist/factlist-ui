import React from 'react'
import { Flex, Box } from '@rebass/grid'
import cm from './twitterLogin.module.css'


export default ({ onClick }) =>
  <a
    className={cm.link}
    onClick={onClick}
    href='#nogo'
  >
    <Flex justifyContent="center">
      <Box>
        <img
          className={cm.img}
          src="/images/icons/twitter.svg"
          alt='twitter login'
        />
      </Box>

      <Box mx="auto">Login with Twitter</Box>
    </Flex>
  </a>
