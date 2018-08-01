import React, { Component } from 'react';
import CodeRender from './CodeRender';
import StyleRender from './StyleRender';
import HtmlRender from './HtmlRender';
import JSRender from './JSRender';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    styles: `#foo{border:1px solid red;}`,
    html: `<strong id="foo">Foo</strong>`,
    js: ``,
  }

  handleStyle = (styleCode) => {
    this.setState({styles: styleCode});
  }

  handleHTML = (htmlCode) => {
    this.setState({html: htmlCode});
  }

  handleJS = (jsCode) => {
    this.setState({js: jsCode});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div class="grid">
          <StyleRender
            className="grid__item"
            handleStyle={this.handleStyle} />
          <HtmlRender
            className="grid__item"
            handleHTML={this.handleHTML} />
          <JSRender
            className="grid__item"
            handleJS={this.handleJS} />
        </div>
        <div className="grid">
          <CodeRender
          className="grid__item"
          styles={this.state.styles}
          html={this.state.html}
          js={this.state.js} />
        </div>
      </div>
    );
  }
}

export default App;
