import React, { Fragment } from 'react';
import Container from './Container';
import Tags from './Tags';
import Item from './Item';
import AddTag from './AddTag';
import Remove from './Remove';

const renderItems = tags => {
  if (tags) {
    return tags.map(tag => {
        return <Item>{tag}<Remove>x</Remove></Item>
    });
  }
};

const renderAddTag = tags => {
  if (tags) {
    return (
      <Fragment>
        <AddTag><div>+</div></AddTag>
      </Fragment>
    );
  }
};

const TagInput = ({ tags }) => (
  <Fragment>
    <Container>
      <Tags>
        {renderItems(tags)}
        {renderAddTag(tags)}
      </Tags>
    </Container>
  </Fragment>
);

export default TagInput;
