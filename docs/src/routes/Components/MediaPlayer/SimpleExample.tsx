import * as React from "react";
import * as PropTypes from "prop-types";

import MediaPlayer from "react-uwp/MediaPlayer";

export default class SimpleExample extends React.Component<any, void> {
  static contextTypes = { theme: PropTypes.object };
  context: { theme: ReactUWP.ThemeType };

  render() {
    const isPhoneScreen = window.innerHeight < 1024;
    return (
      <MediaPlayer
        url="https://www.youtube.com/watch?v=vcBGj4R7Fo0"
        style={{ margin: 20 }}
        width={isPhoneScreen ? 320 : 640}
        height={isPhoneScreen ? 160 : 320}
      />
    );
  }
}
