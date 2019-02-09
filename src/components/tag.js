import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

//- butona basinca input focus inputa blur olunca input kaybolacak(bossa)

class App extends React.Component {
  state = {
    tagsInputvalue: "",
    tags: ["tag1", "exampleTag", "aa"],
    isShow: false
  };

  handleAddBtn() {
    this.setState({
      isShow: true
    });
  }

  renderTags() {
    return this.state.tags.map((tag, i) => {
      return (
        <span key={i} className="item">
          {tag}
          <span className="remove" onClick={() => this.handleRemoveTag(tag)}>
            x
          </span>
        </span>
      );
    });
  }

  handleRemoveTag(removeTag) {
    const newTags = this.state.tags.filter(tag => {
      return tag !== removeTag;
    });

    this.setState({ tags: newTags });
  }

  handleInputOnChange(e) {
    e.preventDefault();
    this.setState({
      tagsInputvalue: e.target.value
    });
  }

  handleKeyPress(e) {
    if (e.key === "Enter" && this.state.tags.indexOf(e.target.value) === -1) {
      if (this.state.tagsInputvalue) {
        this.state.tags.push(this.state.tagsInputvalue);
        this.setState({ isShow: false });
        this.setState({ tagsInputvalue: "" });
      }
    }
  }

  handleOnBlur(e) {
    if (this.state.tags.indexOf(e.target.value) === -1) {
      if (this.state.tagsInputvalue) {
        this.state.tags.push(this.state.tagsInputvalue);
        this.setState({ isShow: false });
        this.setState({ tagsInputvalue: "" });
      }
      console.log(this.state.tags);
    }
  }

  inputRender() {
    const isShow = this.state.isShow ? "" : "hidden";
    return (
      <span className={`add-input ${isShow}`}>
        <input
          type="text"
          value={this.state.tagsInputvalue}
          onChange={this.handleInputOnChange.bind(this)}
          onBlur={this.handleOnBlur.bind(this)}
          onKeyPress={this.handleKeyPress.bind(this)}
        />
      </span>
    );
  }

  render() {
    return (
      <React.Fragment>
        <div className="wrapper">
          <div className="tags">
            {this.renderTags()}
            {this.inputRender()}
            <span className="add-btn" onClick={this.handleAddBtn.bind(this)}>
              +
            </span>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
