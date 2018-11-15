import { Component } from "react";
import ReactGA from "react-ga";

// import Router from "next/router";
// Router.events.on("routeChangeComplete", url => {});

// https://github.com/zeit/next.js#routing

// "UA-118473626-1"
export class Tracker extends Component {
  componentDidMount() {
    const { code, path } = this.props;
    ReactGA.initialize(code);
    this.pageview(path);

    // this.pageview(this.props.location.pathname, this.props.location.search);
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.path !== prevProps.path) {
      this.pageview(this.props.path);
    }
  }
  pageview = path => {
    ReactGA.set({ page: path });
    ReactGA.pageview(path);
  };
  render() {
    return null;
  }
}

export default Tracker;
