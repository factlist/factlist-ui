import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex } from '@rebass/grid';
import AddIcon from 'components/Link/AddIcon';
import Title from 'components/Link/Title';
import LinkFlex from 'components/Link/LinkFlex';
import AddIconContainer from 'components/Link/AddIconContainer';
import Wrapper from './Wrapper';
import Delete from './Delete';
import { LinkIcon, IconContainer } from './Icon';
import Container from './Container';
import MaskedURL from './MaskedUrl';

class LinkPage extends React.Component {

  renderLinks() {
    return (
      <Fragment>
      <Wrapper>
        <Delete>x</Delete>
        <Container>
          <IconContainer>
            <LinkIcon />
          </IconContainer>
          <MaskedURL url={'http://google.com'} />
        </Container>
        </Wrapper>
      </Fragment>
    );
  }

  render() {
    return (
      <Fragment>
        <LinkFlex>
          <AddIconContainer>
            <AddIcon />
          </AddIconContainer>
          {this.props.children}
        </LinkFlex>
      </Fragment>
    );
  }
}

LinkPage.propTypes = {
  onSave: PropTypes.func,
  title: PropTypes.string
};

LinkPage.defaultProps = {
  title: ''
};

export default LinkPage;
