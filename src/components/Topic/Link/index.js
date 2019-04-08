import React, { Fragment, useContext } from 'react';
import { Flex } from '@rebass/grid';

import Title from './Title';
import Wrapper from './Wrapper';
import Delete from './Delete';
import { LinkIcon , IconContainer } from './Icon';
import Container from './Container';
import MaskedURL from './MaskedURL';

import Tags from 'components/Topic/Tags';

const Link = ({ isEdit, title, url, onDelete, tags, onTagDelete, onTagAdd }) => {
  return (
    <Fragment>
      <Wrapper>
        <Flex justifyContent="space-between" alignItems="center">
          
          {isEdit && <IconContainer> <LinkIcon /> </IconContainer>}
          
          <Container>
            <Title title={title} isEdit={isEdit} />
            <MaskedURL url={url} />
            <Tags tags={tags}
              isEdit={isEdit}
              onDelete={(tag) => onTagDelete(url, tag)}
              onAdd={(tag) => onTagAdd(url, tag)} />
          </Container>

          {isEdit && <Delete onClick={() => onDelete(url)} />}
        
        </Flex>

      </Wrapper>
    </Fragment>
  );
}

export default Link;
