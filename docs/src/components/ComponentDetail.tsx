import * as React from "react";
import Title from "react-title-component";

import ComponentDescription from "./ComponentDescription";
import MarkdownRender from "react-uwp/MarkdownRender";

export interface ComponentDetailProps {
  title?: string;
  docEntry?: any;
  readmeText?: string;
  children?: any;
  renderOtherTypes?: string[];
}

export default class ComponentDetail extends React.Component<ComponentDetailProps, void> {
  static defaultProps: ComponentDetailProps = {
    title: `${location.pathname.split("/").slice(-1)[0].split("-").map((str: string) => str[0].toUpperCase() + str.slice(1)).join(" ")} React-UWP App developer | Docs`
  };

  render() {
    const { title, docEntry, readmeText, children, renderOtherTypes, ...attributes } = this.props;
    return (
      <div>
        <Title render={title} />
        <div style={{ padding: 20 }}>
          <MarkdownRender text={readmeText} />
          {children}
          {docEntry && (
            <ComponentDescription renderOtherTypes={renderOtherTypes} docEntry={docEntry} />
          )}
        </div>
      </div>
    );
  }
}
