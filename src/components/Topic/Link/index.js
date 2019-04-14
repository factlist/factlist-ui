import React, { Fragment } from 'react';
import { Flex } from '@rebass/grid';

import Title from './Title';
import Wrapper from './Wrapper';
import Delete from './Delete';
import { LinkIcon , IconContainer } from './Icon';
import Container from './Container';
import MaskedURL from './MaskedURL';

import Tags from 'components/Topic/Tags';

const Link = ({ isEdit, title, url, onDelete, tags, onTagDelete, onTagAdd, updateTitle }) => {
  return (
    <Fragment>
      <Wrapper>
        <Flex justifyContent="space-between" alignItems="center">

          {isEdit && <IconContainer> <LinkIcon /> </IconContainer>}

          <Container>
            <Title title={title} isEdit={isEdit} updateTitle={updateTitle} />
            <MaskedURL url={url} />
            <Tags tags={tags}
              isEdit={isEdit}
              onDelete={onTagDelete}
              onAdd={onTagAdd} />
          </Container>

          {isEdit && <Delete onClick={() => onDelete(url)} />}
        </Flex>
      </Wrapper>
    </Fragment>
  );
}

export default Link;
