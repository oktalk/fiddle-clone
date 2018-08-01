import React, { Component } from 'react';

class CodeRender extends Component {
  componentDidUpdate = () => {
    const results = `
      <html>
          <head>
              <style>
                  ${this.props.styles}
              </style>
          </head>
          <body>
              ${this.props.html}
              <script type="text/javascript">
              ${this.props.js}
              </script>
          </body>
      </html>
    `

    const iframe = document.getElementById('iframe');
    let doc;

    if(iframe.contentDocument) doc = iframe.contentDocument;
    else if(iframe.contentWindow) doc = iframe.contentWindow.document;
    else doc = iframe.document;

    doc.open();
    doc.writeln(results)
    doc.close();
  }

  render() {
    return (
      <div className={this.props.className}>
        <iframe id="iframe"></iframe>
      </div>
    );
  }
}

export default CodeRender;
