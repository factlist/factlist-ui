import React from 'react';
import { Flex, Box } from '@rebass/grid';
import { Link } from 'react-router-dom';
import Button from 'components/Button';

const TopNavigation = ({ onClickSave }) => (
  <Flex bg='#fff'
        css={{
          borderBottom: '0.5px solid #dddddd',
          height: '80px',
        }}
        alignItems='center'
        justifyContent='center'
  >
    <Box css={{
        display: 'flex',
        alignItems: 'center',
        justifyContent:'flex-end',
        width: '50%',
        backgroundColor: '#FFFFFF'
      }}>
      <Button to="/" redirect style={{marginRight: 20}} primary={false} title="Cancel"/>
      <Button onClick={onClickSave} primary={false} title="Save"/>
    </Box>
  </Flex>
);

export default TopNavigation;
