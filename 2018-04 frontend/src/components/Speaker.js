import React, { Component } from "react";
// import PropTypes from "prop-types";
// import axios from "axios";
import get from "lodash.get";
import { Follow } from "react-twitter-widgets";

export class Speaker extends Component {
  state = {
    twitter: null,
  };

  componentDidMount() {
    // const { speaker } = this.props;
    // if (false && speaker && speaker.twitter) {
    //   axios
    //     .get(
    //       `https://wt-christian-gen-co-0.run.webtask.io/twitterwebtask?screen_name=${
    //         speaker.twitter
    //       }`
    //     )
    //     .then(res => {
    //       this.setState({ twitter: get(res, "data") });
    //     });
    // }
  }

  render() {
    const { speaker } = this.props;
    const { name, title, bioUrl } = speaker;
    const { twitter } = this.state;

    const image =
      speaker.image ||
      (get(twitter, "profile_image_url_https") || "").replace("_normal", "");
    const screen_name = speaker.twitter;
    const description = speaker.description || get(twitter, "description");
    const location = speaker.location || get(twitter, "location");
    const verified = get(twitter, "verified");

    // TODO: urls

    return (
      <div className="card">
        <div className="row card-body">
          <div className="col-md-8">
            <div className="card-block">
              <h3 className="card-title" style={{ marginBottom: 0 }}>
                About {name}
              </h3>
              {title && <h5 className="text-muted">{title}</h5>}
              <p className="card-text">{description}</p>
              <div className="card-text" style={{ marginTop: 10 }}>
                {location}{" "}
                {screen_name && (
                  <Follow username={screen_name} options={{ size: "large" }} />
                )}
              </div>
            </div>
          </div>
          {image && (
            <div className="col-md-4">
              <img src={image} alt={name} className="w-100" />
            </div>
          )}
        </div>
        {false && (
          <pre>
            {JSON.stringify({ props: this.props, state: this.state }, null, 2)}
          </pre>
        )}
      </div>
    );
  }
}
// https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes
// Speaker.propTypes = {};

// https://pbs.twimg.com/profile_images/967988126810497024/FfWSKiD_.jpg

export default Speaker;

{
  /* <h2>
  by {speaker.name}{" "}
  {speaker.twitter && (
    <div style={{ float: "right" }}>
      <Follow username={speaker.twitter} options={{ size: "large" }} />
    </div>
  )}
</h2> */
}
