import React, { Fragment } from 'react';
import { Flex } from "@rebass/grid";
import Title from './Title';
import Wrapper from './Wrapper';
import Delete from './Delete';
import { LinkIcon } from './Icon';
import Container from './Container';
import MaskedURL from './MaskedUrl';
import styled from 'styled-components';

class LinkList extends React.Component {
  render() {
    const { title, url } = this.props;
    return (
      <Fragment>
        <Wrapper>
          <Flex justifyContent="space-between" alignItems="center">
            <Title title={title} />
            <Delete>x</Delete>
          </Flex>
          <Container>
            <LinkIcon />
            <MaskedURL url={url} />
          </Container>
        </Wrapper>
      </Fragment>
    );
  }
}

export default LinkList;
