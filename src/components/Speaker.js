import React, { Component } from "react";
// import PropTypes from "prop-types";
import axios from "axios";
import get from "lodash.get";

export class Speaker extends Component {
  state = {
    twitter: null,
  };

  componentDidMount() {
    const { speaker } = this.props;
    if (speaker && speaker.twitter) {
      axios
        .get(
          `https://wt-christian-gen-co-0.run.webtask.io/twitterwebtask?screen_name=${
            speaker.twitter
          }`
        )
        .then(res => {
          this.setState({ twitter: get(res, "data") });
        });
    }
  }

  render() {
    const { speaker } = this.props;
    const { name } = speaker;
    const { twitter } = this.state;

    const image =
      speaker.image ||
      (get(twitter, "profile_image_url_https") || "").replace("_normal", "");
    const screen_name = speaker.twitter;
    const description = speaker.description || get(twitter, "description");
    const location = speaker.location || get(twitter, "location");
    const verified = get(twitter, "verified");

    return (
      <div className="">
        <div className="row">
          <div className="col-md-8">
            <div className="card-block">
              <h4 className="card-title">by {name}</h4>
              <p className="card-text">{description}</p>
            </div>
          </div>
          {image && (
            <div className="col-md-4">
              <img src={image} alt={name} className="w-100" />
            </div>
          )}
        </div>
        <pre>
          {JSON.stringify({ props: this.props, state: this.state }, null, 2)}
        </pre>
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
