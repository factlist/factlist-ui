import React from 'react'
import { Flex, Box } from 'grid-styled'
import Button from 'components/Button'
import Container from './Container'
import Logo from './Logo'
import SearchInput from './SearchInput'
import Avatar from './Avatar'
import MobileSearch from './MobileSearch'

const Header = ({
  authenticating,
  user,
  onClickClaimButton,
  onClickSignInButton,
  hideSignInButton = false,
}) => (
  <Container justifyContent="center" alignItems="center">
    <Box width={200} ml={10}>
      <Logo />
    </Box>

    <Box width={670} mx={30}>
      <SearchInput type="text" placeholder="Search" />
    </Box>

    <Box width={270} mr={[20, 10]}>
      <Flex justifyContent="flex-end">
        <Box>
          <MobileSearch />
        </Box>
        <Box ml={10}>
          {!user && !hideSignInButton && <Button onClick={onClickSignInButton} light>Sign in</Button>}
          {user && <Avatar src="/images/example-avatar.png" />}
        </Box>
        <Box ml={10}>
          <Button onClick={onClickClaimButton} primary>Add claim</Button>
        </Box>
      </Flex>
    </Box>
  </Container>
)

export default Header
