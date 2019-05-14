import React from 'react';
import ContentLoader from 'react-content-loader'
import { Flex, Box } from '@rebass/grid';
import { Link } from 'react-router-dom';
import {SearchBox} from 'react-instantsearch-dom';
import Button from 'components/Button';
import Logo from 'components/Logo';
import cm from './header.module.css'


const Header = ({
  authenticating,
  user,
  token,
  onClickSignInButton,
  hideSignInButton = false,
}) =>
  <div className={cm.header}>
    <Flex width={['auto','600px','960px', '1200px']} justifyContent="flex-start" alignItems="center">
      <Box width={[ 'auto', '130px', '235px']}>
        <Logo />
      </Box>

      <Box flex='1 0 0' mx={20} >
        <SearchBox
          className={cm.searchBox}
          type="text"
          placeholder="Search"
        />
      </Box>

      <Box width={[ 'auto', '130px', '235px']}>
        <Flex justifyContent="flex-end">
          <Box mr={10}>
            <Button primary to='/topic/new' children="New Topic"/>
          </Box>

          <Box>
            {authenticating && <AvatarLoader />}

            {!authenticating && !token && !hideSignInButton &&
              <Button onClick={onClickSignInButton} primary={false} children="Sign in" />}

            {!authenticating && token && (
              <Link to={'/@' + user.username}>
                <img
                  className={cm.avatar}
                  src={user.avatar}
                />
              </Link>
            )}
          </Box>
        </Flex>
      </Box>
    </Flex>
  </div>

export default Header;

const AvatarLoader = () =>
  <ContentLoader
    animate={false}
    primaryColor="#F3F3F3"
    secondaryColor="#F3F3F3"
    width={80}
    height={80}
    style={{ width: '40px', height: '40px' }}>
    <circle cx="40" cy="40" r="40" />
  </ContentLoader>
