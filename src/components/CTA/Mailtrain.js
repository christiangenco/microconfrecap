import React, { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const defaultState = {
  first: "",
  last: "",
  email: "",
  error: null,
  submittedAt: null,
  subscribedAt: null,
};

export class Mailtrain extends Component {
  state = defaultState;

  onSubmit = e => {
    e.preventDefault();

    const { first, last, email } = this.state;
    const { onConvert } = this.props;

    this.setState({ submittedAt: +new Date() });

    axios
      .post("https://wt-christian-gen-co-0.run.webtask.io/mailtrain_api", {
        first,
        last,
        email,
        listId: "BkpoOc5hG",
      })
      .then(res => {
        if (res && res.data && res.data.data && res.data.data.id) {
          const subscribedAt = +new Date();
          onConvert({
            first,
            last,
            email,
            mailtrainId: res.data.data.id,
            subscribedAt,
          });

          this.setState({
            subscribedAt,
          });
        } else {
          this.setState({
            error:
              "Uhoh - something went wrong. Refresh the page and try again? Tweet @cgenco? ...restart your computer?",
            submittedAt: null,
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    const { first, last, email, submittedAt, error, subscribedAt } = this.state;

    const isLoading = !!submittedAt;

    const isSubscribed = !!subscribedAt;

    // if (isSubscribed) {
    //   return (
    //     <div className="card">
    //       <div className="card-body">
    //         <h2 className="card-title">Signed up</h2>
    //         <p className="card-text">
    //           Hey {first || "there"}, you're signed up to get the free eBook of
    //           every Starter and Growth talk when it's ready! Tweet{" "}
    //           <a href="https://twitter.com/cgenco">@cgenco</a> if you'd like
    //           something special.
    //         </p>
    //       </div>
    //     </div>
    //   );
    // }

    return (
      <div className="card">
        <h3 className="card-header">Free "Microconf 2018" eBook</h3>
        <div className="card-body">
          <form
            className="pure-form pure-form-stacked"
            onSubmit={this.onSubmit}
            className="container"
          >
            <div className="row">
              <div className="col-md-6">
                <p>
                  I'm sending out a beautiful PDF eBook of notes from every
                  MicroConf 2018 Starter and Growth talk – both Speaker and
                  Attendee. Want a copy?
                </p>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    aria-describedby="nameHelp"
                    placeholder="Christian"
                    value={first}
                    onChange={e => this.setState({ first: e.target.value })}
                    disabled={isLoading}
                  />
                  <small id="nameHelp" className="form-text text-muted">
                    What your friends call you
                  </small>
                </div>

                <div className="form-group">
                  <label htmlFor="name">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="christian@gen.co"
                    value={email}
                    onChange={e => this.setState({ email: e.target.value })}
                    disabled={isLoading}
                  />
                  <small id="emailHelp" className="form-text text-muted" />
                </div>

                <button
                  type="submit"
                  className={`btn btn-primary btn-block ${
                    isLoading ? "pulsing" : ""
                  }`}
                  disabled={isLoading}
                >
                  {isLoading ? "k hang on..." : "Get the book"}
                </button>
              </div>
              <div className="col-md-6">
                <img
                  // src="/bookcover.png"
                  src="/covers/3d.png"
                  alt=""
                  style={{ flex: 1 }}
                  className="img-fluid"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

// https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes
Mailtrain.propTypes = {};

export default Mailtrain;
