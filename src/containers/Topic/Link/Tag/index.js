import React from "react";
import ReactDOM from "react-dom";
import styled from 'styled-components'

const StyledTag = styled.span`
  display: inline-block;
  border-radius: 2px;
  font-size: 12px;
  text-align: center;
  padding: 2px 3px 2px 5px;
  margin-top: 2px;
  margin-right: 3px;
  background-color: rgba(237,239,241,0.73);
  color: rgba(26,26,27,0.78);
  font-weight: bold;
`

//- butona basinca input focus inputa blur olunca input kaybolacak(bossa)

class Tag extends React.Component {
  state = {
  //   value: "",
  //   tags: ["tag1", "exampleTag", "aa"],
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
    return tags && tags.map((tag, i) => {
      return (
        <StyledTag className="item">
          {tag.title}
          <span className="remove" onClick={this.onRemove.bind(this)}>
            x
          </span>
        </StyledTag>
      );
    });
  }

  handleInputOnChange(e) {
    e.preventDefault();
    this.props.onChange;
  }

  onSave() {
    console.log(this.state.isVisible, 'isVisible')
    this.setState({ isVisible: false });
    this.props.onSave();
  }

  inputRender() {
    const isVisible = this.state.isVisible ? "" : "hidden";
    const { value, onChange, onBlur, onKeyPress } = this.props;

    return (
      <StyledTag className={`add-input ${isVisible}`}>
        <input
          type="text"
          value={value}
          onChange={this.handleInputOnChange.bind(this)}
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
          <div className="tags">
            {this.renderTags()}
            {this.inputRender()}
            <span className="add-btn" onClick={this.handleAddNewTag.bind(this)}>
              +
            </span>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Tag;
