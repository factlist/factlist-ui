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
  <Container width={['auto','600px','960px', '1200px']} justifyContent="flex-start" alignItems="center">
    <Box width={[ 'auto', '130px', '235px']}>
      <Logo />
    </Box>

    <Box flex='1 0 0' mx={20} >
      <SearchInput type="text" placeholder="Search" />
    </Box>

    <Box width={[ 'auto', '130px', '235px']}>
      <Flex justifyContent="flex-end">
        <Box mr={10}>
          <Button primary to='/topic/new' title="New Topic"/>
        </Box>
        <Box>
          {authenticating && <AvatarLoader />}
          {!authenticating && !token && !hideSignInButton &&
          <Button onClick={onClickSignInButton} primary={false} title="Sign in" />
          }
          {!authenticating && token && (
            <Link to={'/@' + user.username}>
              <Avatar src={user.avatar} />
            </Link>
          )}
        </Box>
      </Flex>
    </Box>
  </Container>
)

export default Header;
