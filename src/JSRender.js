import React, { Component } from 'react';

class JSRender extends Component {
  handleChange = (event) => {
    this.props.handleJS(event.target.value);
  }

  render() {
    return (
      <div className={this.props.className}>
        <textarea onChange={this.handleChange} name="" id="" cols="30" rows="10" />
      </div>
    );
  }
}

export default JSRender;
