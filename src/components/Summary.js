import React, { Component } from "react";
// import PropTypes from "prop-types";
import Markdown from "react-markdown";
import distanceInWords from "date-fns/distance_in_words";

export class Summary extends Component {
  render() {
    const { summary } = this.props;
    const { body, isPublic, name, updatedAt, id } = summary;

    return (
      <div className="card">
        <h5 className="card-header">
          {name}{" "}
          <small className="text-muted">
            {distanceInWords(updatedAt, new Date())} ago
          </small>
        </h5>
        <div className="card-body">
          <Markdown source={body} />
        </div>
      </div>
    );
    return <pre>{JSON.stringify(this.props, null, 2)}</pre>;
  }
}
// https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes
// Summary.propTypes = {};

export default Summary;
