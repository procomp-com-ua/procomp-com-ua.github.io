import React from "react";

export class Code extends React.Component {

  static propProps = {
    lang: React.PropTypes.string.isRequired,
    block: React.PropTypes.bool,
  };

  render() {
    const langClass = `language-${this.props.lang}`;
    const codeElement = <code className={langClass} dangerouslySetInnerHTML={{ __html: this.props.children }}/>;
    if (this.props.block) {
      return (
        <pre className={langClass}>{codeElement}</pre>
      );
    }
    return codeElement;
  }
}
