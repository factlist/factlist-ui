import React, { Fragment } from 'react';
import { Flex } from '@rebass/grid';
import Title from './Title';
import Wrapper from './Wrapper';
import Delete from './Delete';
import { LinkIcon } from './Icon';
import Container from './Container';
import MaskedURL from './MaskedUrl';
import styled from 'styled-components';
import TagInput from 'components/TagInput';

class LinkList extends React.Component {
  render() {
    const { title, url } = this.props;
    return (
      <Fragment>
        <Wrapper>
          <Flex justifyContent="space-between" alignItems="center">
            <Title title={title} />
            <Delete onClick={this.props.onDelete}>x</Delete>
          </Flex>
          <Container>
            <LinkIcon />
            <MaskedURL url={url} />
          </Container>
          <TagInput isOpen={this.props.isOpen} addTag={this.props.onAddTag} tags={this.props.tags} />
        </Wrapper>
      </Fragment>
    );
  }
}

export default LinkList;
