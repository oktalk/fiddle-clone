import React, { Component } from 'react';

class HtmlRender extends Component {
  handleChange = (event) => {
    this.props.handleHTML(event.target.value);
  }

  render() {
    return (
      <div className={this.props.className}>
        <textarea onChange={this.handleChange} name="" id="" cols="30" rows="10" />
      </div>
    );
  }
}

export default HtmlRender;
