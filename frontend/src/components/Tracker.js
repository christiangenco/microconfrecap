import { Component } from "react";
import ReactGA from "react-ga";

// https://github.com/zeit/next.js#routing

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
    const page = pathname + search;
    ReactGA.set({ page });
    ReactGA.pageview(page);
  };
  render() {
    return null;
  }
}

export default Tracker;
