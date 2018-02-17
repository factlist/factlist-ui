import React from 'react'
import { Flex, Box } from 'grid-styled'
import Container from './Container'
import Logo from './Logo'
import SearchInput from './SearchInput'
import Avatar from './Avatar'
import ReportButton from './ReportButton'
import MobileSearch from './MobileSearch'

const Header = () => (
  <Container justify="center" align="center">
    <Box width={165} ml={10}>
      <Logo />
    </Box>

    <Box width={670} mx={30}>
      <SearchInput type="text" placeholder="Search | Explosion in Cairo..." />
    </Box>

    <Box width={270} mr={[20, 10]}>
      <Flex justify="flex-end">
        <Box>
          <MobileSearch />
        </Box>
        <Box ml={10} order={[2, 1]}>
          <Avatar src="images/example-avatar.png" />
        </Box>
        <Box ml={10} order={[1, 2]}>
          <ReportButton>REPORT</ReportButton>
        </Box>
      </Flex>
    </Box>
  </Container>
)

export default Header
