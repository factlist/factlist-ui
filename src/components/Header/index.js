import React from 'react'
import { Flex, Box } from 'grid-styled'
import Container from './Container'
import Logo from './Logo'
import SearchInput from './SearchInput'
import Avatar from './Avatar'
import MobileSearch from './MobileSearch'
import AddClaimButton from './AddClaimButton'
import SignInButton from './SignInButton'

const Header = ({
  authenticating,
  user,
  onClickClaimButton,
  onClickSignInButton,
  hideSignInButton = false,
}) => (
  <Container justify="center" align="center">
    <Box width={200} ml={10}>
      <Logo />
    </Box>

    <Box width={670} mx={30}>
      <SearchInput type="text" placeholder="Search" />
    </Box>

    <Box width={270} mr={[20, 10]}>
      <Flex justify="flex-end">
        <Box>
          <MobileSearch />
        </Box>
        <Box ml={10}>
          {!user && !hideSignInButton && <SignInButton onClick={onClickSignInButton} />}
          {user && <Avatar src="/images/example-avatar.png" />}
        </Box>
        <Box ml={10}>
          <AddClaimButton onClick={onClickClaimButton} />
        </Box>
      </Flex>
    </Box>
  </Container>
)

export default Header
