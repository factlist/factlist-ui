import React from "react";
import styled from 'styled-components'

const StyledTag = styled.span`
  display: inline-block;
  border-radius: 2px;
  font-size: 12px;
  text-align: center;
  margin-top: 2px;
  margin-right: 3px;
  background-color: rgba(237,239,241,0.73);
  color: rgba(26,26,27,0.78);
  font-weight: bold;
`;

const TagsDiv = styled.div`
  padding-left: 20px;
`;
const Input = styled.input`
  width: 100px;
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
    const { tags } = this.props;
    return tags && tags.map((tag, index) => {
      return (
        <StyledTag key={index} className="item">
          {tag.title}
          <span className="remove" onClick={this.onRemove.bind(this)}>
            x
          </span>
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
      <StyledTag className={`add-input ${isVisible}`}>
        <Input
          type="text"
          value={value}
          onChange={onChange}
          onBlur={() => this.onSave()}
          onKeyPress={(e) => e.key === 'Enter' && this.onSave()}
        />
      </StyledTag>
    );
  }

  render() {
    return (
      <React.Fragment>
        <div className="wrapper">
          <TagsDiv className="tags">
            {this.renderTags()}
            {this.inputRender()}
            <span className="add-btn" onClick={this.handleAddNewTag.bind(this)}>
              +
            </span>
          </TagsDiv>
        </div>
      </React.Fragment>
    );
  }
}

export default Tag;
