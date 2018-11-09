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
    const { db } = this.props;

    const randomCoverIndex = Math.floor(Math.random() * 16);

    if (profile) {
      return (
        <div className="card">
          <img
            className="card-img-top"
            src={`https://microconf.gen.co/covers/${randomCoverIndex}.jpg`}
            alt="Microconf 2018 Recap Book Cover"
          />
          <div className="card-body">
            <h2 className="card-title">The Microconf 2018 Recap is Yours</h2>
            <p className="card-text">
              Hey {profile.first || "there"}, you're signed up to get the free
              eBook of every Starter and Growth talk when it's ready! You should
              tell your friends about this. They'll probably be like "ahh whoa
              thank you you're such a good friend and you have such good and
              useful and interesting tweets!"
              {false && (
                <Share
                  url={`https://microconf.gen.co/book/${randomCoverIndex}`}
                  options={{
                    text:
                      "I just signed up for a free ebook summary of @microconf 2018 at ",
                    hashtags: "microconf",
                    via: "cgenco",
                    related: "microconf",
                  }}
                />
              )}
            </p>
            <a
              href={`https://twitter.com/intent/tweet?hashtags=microconf&amp;original_referer=http%3A%2F%2Flocalhost%3A3000%2Ftest&amp;ref_src=twsrc%5Etfw&amp;related=microconf&amp;text=I%20just%20signed%20up%20for%20a%20free%20ebook%20summary%20of%20%40microconf%202018%20at%20&amp;tw_p=tweetbutton&amp;url=https%3A%2F%2Fmicroconf.gen.co%2Fbook%2F${randomCoverIndex}&amp;via=cgenco`}
              className="btn btn-primary btn-block"
              target="_blank"
            >
              Tweet About This Cool Free Book
            </a>
          </div>
        </div>
      );
      // return <pre>{JSON.stringify(profile, null, 2)}</pre>;
    }

    return (
      <Mailtrain
        db={db}
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
