import React from 'react';
import { Box, Flex } from '@rebass/grid';
import Button from 'components/Button';
import Logo from 'components/Header/Logo';
import Container from './Container';

const Header = ({
  onClickSave
}) => (
    <Container justifyContent="center" alignItems="center">
      <Box>
        <Logo />
      </Box>
      <Box>
          <Button to="/" style={{marginRight: 20}} redirect primary={false} title="Cancel"/>
          <Button onClick={onClickSave} primary={false} title="Save"/>
      </Box>
    </Container>
  )

export default Header;
