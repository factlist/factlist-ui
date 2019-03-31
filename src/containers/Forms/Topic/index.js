import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Flex, Box } from '@rebass/grid';
import Container from './Container';
import Header from './Header';
import TopicForm from './Form';
import LinkPage from '../Link';
import LinkForm from '../Link/Form';
import Separator from 'components/Separator';
import LinkList from '../Link/LinkList';
import { reduxForm, Field, formValueSelector, change } from 'redux-form';
import TopicInput from 'components/Topic/Input';
import LinkInput from 'components/Link/Input';

class TopicPage extends React.Component {
  handleLinkOnBlur = this.handleLinkOnBlur.bind(this);
  handleLinkDelete = this.handleLinkDelete.bind(this);
  handleAddTag = this.handleAddTag.bind(this);
  handleTagOnBlur = this.handleTagOnBlur.bind(this);

  state = {
    topic: {
      title: ''
    },

    tagInput: {
      title: ''
    },

    links: [],
    tags: [],
    isOpen: false
  };

  handleLinkDelete(link) {
    this.setState({
      links: this.state.links.filter(item => item.url !== link.url)
    });
  }

  handleLinkOnBlur() {
    if (this.props.link) {
      const topic = {
        title: this.props.topic
      };

      const linkInput = {
        url: this.props.link,
        title: 'title'
      };

      this.setState(
        {
          topic: topic,
          links: this.state.links.concat(linkInput)
        },
        () => {
          this.props.updateField('link', '');
        }
      );
    }
  }

  handleAddTag() {
    this.setState({
      ...this.state,
      isOpen: true
    });
  }

  handleTagOnBlur() {
    const tag = this.state.tagInput.title
    this.setState({
      ...this.state,
      tags: this.state.tags.concat(tag),
      isOpen: false
    });

    this.setState({
      tagInput: {
        title: ''
      }
    })
  }

  renderLinkList() {
    if (this.state.links.length > 0) {
      return this.state.links.map((link, key) => {
        return (
          <Fragment>
            <LinkList
              tagTitle={this.state.tagInput.title}
              tagOnChange={e =>
                this.setState({
                  tagInput: {
                    title: e.target.value
                  }
                })}
              tagOnBlur={this.handleTagOnBlur}
              isOpen={this.state.isOpen}
              onAddTag={() => this.handleAddTag()}
              onDelete={() => this.handleLinkDelete(link)}
              key={key}
              title={link.title}
              url={link.url}
              tags={this.state.tags}
            />
            <Separator />
          </Fragment>
        );
      });
    }
  }

  onSubmit() {
    this.handleLinkOnBlur();
  }

  render() {
    return (
      <Fragment>
        <Header />
        <Box>
          <Container>
            <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
              <Flex flexDirection="column">
                <Box width={1}>
                  <Field
                    type="text"
                    id="topic"
                    name="topic"
                    placeholder="New Topic"
                    component={TopicInput}
                  />
                </Box>
              </Flex>
              <Flex flexDirection="column" mt={30}>
                <Box mb="5px" mt="5px">
                  {this.renderLinkList()}
                </Box>
              </Flex>
              <LinkPage>
                <Field
                  onBlur={this.handleLinkOnBlur}
                  id="link"
                  name="link"
                  placeholder="Add a link to your topic"
                  component={LinkInput}
                />
              </LinkPage>
              <button style={{ display: 'none' }} type="submit" />
            </form>
          </Container>
        </Box>
      </Fragment>
    );
  }
}

TopicPage.defaultProps = {
  marginBottom: '30px',
  topic: {
    id: null,
    title: 'Topic title',
    createdAt: 'created at',
    links: []
  }
};

const selector = formValueSelector('TOPIC_FORM');

const mapStateToProps = state => {
  const link = selector(state, 'link');
  const topic = selector(state, 'topic');
  const tag = selector(state, 'tag');
  return {
    link,
    topic,
    tag
  };
};

const mapDispatchToProps = dispatch => ({
  updateField: (field, data) => dispatch(change('TOPIC_FORM', field, data))
});

export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm({ form: 'TOPIC_FORM' })(TopicPage)
);
