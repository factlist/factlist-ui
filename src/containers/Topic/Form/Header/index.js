import React from 'react';
import { Flex, Box  } from '@rebass/grid';
import Button from 'components/Button';
import Avatar from 'components/Header/Avatar';
import { Link } from 'react-router-dom';
import Container from './Container';
import Notice from './Notice';

const Header = ({ onSave, user }) => (
    <Container >
      <Flex css={{
        maxWidth: '670px',
        width: '100%',
        margin: 'auto', 
        justifyContent: 'space-between'
      }} >
        <Box>
          <a href="/">
            <Button onClick={onSave} primary={false} title="<"/>
          </a>
          <Notice>Saving...</Notice>
        </Box>
        <Box>
            <Link to={'/@' }>
              <Avatar src="https://api.adorable.io/avatars/250/abott@adorable" />
            </Link>
        </Box>
      </Flex>

   
    </Container>
  )

export default Header;
