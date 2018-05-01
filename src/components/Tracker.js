import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactGA from "react-ga";

// "UA-118473626-1"
export class Tracker extends Component {
  componentDidMount() {
    ReactGA.initialize(this.props.code);
    this.pageview(this.props.location.pathname, this.props.location.search);
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      this.props.location.pathname !== prevProps.location.pathname ||
      this.props.location.search !== prevProps.location.search
    ) {
      this.pageview(this.props.location.pathname, this.props.location.search);
    }
  }
  pageview = (pathname, search) => {
    console.log("pageview: ");
    console.log({ pathname, search });

    const page = pathname + search;
    ReactGA.set({ page });
    ReactGA.pageview(page);
  };
  render() {
    return null;
  }
}
// https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes
Tracker.propTypes = {};

export default Tracker;
