import React, { Component } from "react";
// import PropTypes from "prop-types";

export class Summary extends Component {
  render() {
    return <pre>{JSON.stringify(this.props, null, 2)}</pre>;
  }
}
// https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes
// Summary.propTypes = {};

export default Summary;
