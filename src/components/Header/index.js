import React from 'react'
import { Flex, Box } from 'grid-styled'
import { Link } from 'react-router-dom'
import Button from 'components/Button'
import Container from './Container'
import Logo from './Logo'
import SearchInput from './SearchInput'
import Avatar from './Avatar'
import MobileSearch from './MobileSearch'
import AvatarLoader from './AvatarLoader'
import AddClaimLoader from './AddClaimLoader'
import { InstantSearch, RefinementList, SearchBox } from 'react-instantsearch-dom';
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
    <SearchBox />
      <SearchInput type="text" placeholder="Search" />
    </Box>

    <Box width={270} mr={[20, 10]}>
      <Flex justifyContent="flex-end">
        <Box>
          <MobileSearch />
        </Box>
        <Box ml={10}>
          {authenticating && <AvatarLoader />}

          {!authenticating && !user && !hideSignInButton && <Button onClick={onClickSignInButton} light>Sign in</Button>}
          {!authenticating && user && (
            <Link to={'/@' + user.username}>
              <Avatar src={user.avatar} />
            </Link>
          )}
        </Box>
        <Box ml={10}>
          {authenticating ? (
            <AddClaimLoader />
          ) : (
            <Button onClick={onClickClaimButton} primary>Add claim</Button>
          )}
        </Box>
      </Flex>
    </Box>
  </Container>
)

export default Header
