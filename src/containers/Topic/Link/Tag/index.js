import React from "react";
import styled from 'styled-components'
import PropTypes from 'prop-types';

const StyledTag = styled.span`
  display: inline-block;
  border-radius: 2px;
  font-size: 12px;
  text-align: center;
  margin-top: 2px;
  margin-right: 4px;
  padding: 3px;
  background-color: rgba(237,239,241,0.73);
  color: rgba(26,26,27,0.78);
  font-weight: bold;
`;

const TagsDiv = styled.div`
  padding-left: ${props => props.editable ? '20px;' : '0px'};
`;
const Input = styled.input`
  width: 100px;
`;
const DeleteTag = styled.span`
  margin: 0 14px 0 4px;
`;

//- butona basinca input focus inputa blur olunca input kaybolacak(bossa)

class Tag extends React.Component {
  state = {
    isVisible: false
  };

  handleAddNewTag() {
    this.setState({
      isVisible: true
    });
  }

  onRemove(tag) {
    this.props.onRemove(tag);
  }

  renderTags() {
    const { tags, editable } = this.props;
    return tags && tags.map((tag, index) => {
      return (
        <StyledTag key={index} className="item">
          { tag.title }
          { editable && <DeleteTag onClick={this.onRemove.bind(this)}>x</DeleteTag> }
        </StyledTag>
      );
    });
  }

  onSave() {
    this.setState({ isVisible: false });
    this.props.onSave();
  }

  inputRender() {
    const isVisible = this.state.isVisible ? "" : "hidden";
    const { value, onChange } = this.props;

    return (
      <React.Fragment>
        <StyledTag className={`add-input ${isVisible}`}>
          <Input
            type="text"
            value={value}
            onChange={onChange}
            onBlur={() => this.onSave()}
            onKeyPress={(e) => e.key === 'Enter' && this.onSave()}
          />
        </StyledTag>
        <span className="add-btn" onClick={this.handleAddNewTag.bind(this)}>+</span>
      </React.Fragment>
    );
  }

  render() {
    const { editable } = this.props;
    return (
      <React.Fragment>
        <div className="wrapper">
          <TagsDiv editable={editable} className="tags">
            { this.renderTags() }
            { editable && this.inputRender() }
          </TagsDiv>
        </div>
      </React.Fragment>
    );
  }
}

Tag.propTypes = {
  editable: PropTypes.bool,
  onRemove: PropTypes.func,
  onSave: PropTypes.func,
  onChange: PropTypes.func,
  tags: PropTypes.array,
  value: PropTypes.string,
};
Tag.defaultProps = {
  editable: false,
  tags: [],
  value: '',
};

export default Tag;
