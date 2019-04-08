import React, { Fragment, useContext } from 'react';
import { Flex } from '@rebass/grid';

import Title from './Title';
import Wrapper from './Wrapper';
import Delete from './Delete';
import { LinkIcon } from './Icon';
import Container from './Container';
import MaskedURL from './MaskedURL';

import Tags from 'components/Topic/Tags';

const Link = ({ isEdit, title, url, onDelete, tags, onTagDelete, onTagAdd }) => {
  return (
    <Fragment>
      <Wrapper>
        <Flex justifyContent="space-between" alignItems="center">
          <Title title={title} isEdit={isEdit} />
          {isEdit && <Delete onClick={() => onDelete(url)}>x</Delete>}
        </Flex>
        <Container>
          {isEdit && <LinkIcon />}
          <MaskedURL url={url} />
        </Container>
        <Tags tags={tags}
              isEdit={isEdit}
              onDelete={(tag) => onTagDelete(url, tag)}
              onAdd={(tag) => onTagAdd(url, tag)} />
      </Wrapper>
    </Fragment>
  );
}

export default Link;
