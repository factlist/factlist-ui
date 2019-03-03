import React from 'react';
import { Flex, Box } from '@rebass/grid';
import { Link } from 'react-router-dom';
import Button from 'components/Button';
import Container from './Container';
import Logo from './Logo';
import SearchInput from './SearchInput';
import Avatar from './Avatar';
import MobileSearch from './MobileSearch';
import AvatarLoader from './AvatarLoader';

const Header = ({
  authenticating,
  user,
  token,
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
            {authenticating && <AvatarLoader />}
            {!authenticating && !token && !hideSignInButton &&
              <Button onClick={onClickSignInButton} primary={false} title="Sign in" />
            }
            {!authenticating && token && (
              <Link to={'/@' + user.username}>
                <Avatar src={user.avatar} />
              </Link>
            )}
            <Button primary to='/topic/new' title="New Topic"/>
          </Box>
        </Flex>
      </Box>
    </Container>
  )

export default Header;
