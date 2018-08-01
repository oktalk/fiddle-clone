import React, { Component } from 'react';

class StyleRender extends Component {
  handleChange = (event) => {
    this.props.handleStyle(event.target.value);
  }

  render() {
    return (
      <div className={this.props.className}>
        <textarea onChange={this.handleChange} name="" id="" cols="30" rows="10" />
      </div>
    );
  }
}

export default StyleRender;
