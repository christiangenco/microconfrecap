import React from "react";

// Import typefaces
// import 'typeface-montserrat'
// import 'typeface-merriweather'

import profilePic from "./profile-pic.jpg";
// import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          // marginBottom: rhythm(2.5),
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <p style={{ marginBottom: 0 }}>
          by <a href="http://christian.gen.co">Christian Genco</a>
        </p>
        <img
          src={profilePic}
          alt={`Christian Genco`}
          style={{
            marginLeft: 10,
            marginBottom: 0,
            height: "4em",
            // width: rhythm(2),
            // height: rhythm(2),
            borderRadius: "50%",
          }}
        />
      </div>
    );
  }
}

export default Bio;
