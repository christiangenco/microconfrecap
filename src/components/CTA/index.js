import React, { Component } from "react";
// import PropTypes from 'prop-types';
// import { Helmet } from "react-helmet";
import { Follow, Share } from "react-twitter-widgets";

import Mailtrain from "./Mailtrain";

class CTA extends Component {
  state = {
    profile: null,
  };
  componentDidMount() {
    let profile;
    try {
      profile = JSON.parse(localStorage.getItem("profile"));
    } catch (e) {
      console.error(`Error reading from localStorage: ${e}`);
    }
    this.setState({ profile });
  }

  render() {
    const { profile } = this.state;

    if (profile) {
      return (
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">Signed up</h2>
            <p className="card-text">
              Hey {profile.first || "there"}, you're signed up to get the free
              eBook of every Starter and Growth talk when it's ready! You should
              tell your friends about this.
              <Share
                url={"https://microconf.gen.co"}
                options={{
                  text:
                    "I just signed up for a free ebook summary of @microconf 2018 at ",
                  hashtags: "microconf",
                  via: "cgenco",
                  related: "microconf",
                }}
              />
            </p>
          </div>
        </div>
      );
      // return <pre>{JSON.stringify(profile, null, 2)}</pre>;
    }

    return (
      <Mailtrain
        onConvert={profile => {
          localStorage.setItem("profile", JSON.stringify(profile));
          this.setState({ profile });
        }}
      />
    );
  }
}

// https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes
// CTA.propTypes = {

// };

export default CTA;
