import React, { Fragment } from 'react';
import Container from './Container';
import Tags from './Tags';
import Item from './Item';
import AddTag from './AddTag';
import Remove from './Remove';
import Badge from './Badge';
import Input from './Input';

class TagInput extends React.Component {
  renderItems() {
    const { tags } = this.props;
    if (tags) {
      return tags.map(tag => {
        return <Item>{tag}<Remove>x</Remove></Item>;
      });
    }
  }

  renderInput() {
    const { isOpen } = this.props;
    if (isOpen) {
      return (
        <Fragment>
          <Input value={this.props.value} {...this.props} />
        </Fragment>
      );
    }
  }

  renderAddNewTagBadge() {
    const { tags, isOpen } = this.props;
    if (tags.length === 0 && !isOpen) {
      return (
        <Fragment>
          <AddTag>
            <Badge>Add new Tag</Badge><div>+</div>
          </AddTag>
        </Fragment>
      );
    }
  }

  renderAddTag() {
    const { tags } = this.props;
    if (tags.length > 0) {
      return (
        <Fragment>
          <AddTag><div>+</div></AddTag>
        </Fragment>
      );
    }
    return this.renderAddNewTagBadge();
  }

  render() {
    const { addTag } = this.props;
    return (
      <Fragment>
        <Container>
          <Tags onClick={addTag}>
            {this.renderItems()}
            {this.renderAddTag()}
            {this.renderInput()}
          </Tags>
        </Container>
      </Fragment>
    );
  }
}

export default TagInput;
