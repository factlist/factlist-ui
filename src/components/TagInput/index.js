import React, { Fragment } from 'react';
import Container from './Container';
import Tags from './Tags';
import Item from './Item';
import AddTag from './AddTag';
import Remove from './Remove';
import Badge from './Badge';
import Input from './Input';

const renderItems = tags => {
  if (tags) {
    return tags.map(tag => {
      return <Item>{tag}<Remove>x</Remove></Item>;
    });
  }
};

const renderInput = isOpen => {
  if (isOpen) {
    return (
      <Fragment>
        <Input />
      </Fragment>
    );
  }
};

const renderAddNewTagBadge = (tags, isOpen) => {
  if (tags.length === 0 && !isOpen) {
    return (
      <Fragment>
        <AddTag>
          <Badge>Add new Tag</Badge><div>+</div>
        </AddTag>
      </Fragment>
    );
  }
};

const renderAddTag = (tags, isOpen) => {
  if (tags.length > 0) {
    return (
      <Fragment>
        <AddTag><div>+</div></AddTag>
      </Fragment>
    );
  }
  return renderAddNewTagBadge(tags, isOpen)
};

const TagInput = ({ tags, addTag, isOpen }) => (
  <Fragment>
    <Container>
      <Tags onClick={addTag}>
        {renderItems(tags)}
        {renderAddTag(tags, isOpen)}
        {renderInput(isOpen)}
      </Tags>
    </Container>
  </Fragment>
);

export default TagInput;
