import React, { Component } from "react";
// import PropTypes from "prop-types";
import Textarea from "react-textarea-autosize";
import debounce from "lodash.debounce";
import get from "lodash.get";

export class SummaryForm extends Component {
  state = {};

  static getDerivedStateFromProps(nextProps, prevState) {
    const key = `summary:${nextProps.slug}`;
    try {
      const summary = JSON.parse(localStorage.getItem(key));

      if (summary) return { summary };
    } catch (e) {
      console.error(e);
    }

    return {
      summary: nextProps.value || { body: "", isPublic: true },
    };
  }

  save = debounce(() => {
    const key = `summary:${this.props.slug}`;
    localStorage.setItem(key, JSON.stringify(this.state.summary));
  }, 250);

  render() {
    const { user, onChange } = this.props;
    const { summary } = this.state;
    const { body, isPublic } = summary;

    const isDirty =
      body !== get(this.props.value, "body") ||
      isPublic !== get(this.props.value, "isPublic");

    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            onChange(summary);
          }}
        >
          <div className="form-group">
            <label for="">
              {user ? `${user.displayName}'s` : "Your"} Summary
            </label>
            <Textarea
              minRows={3}
              className="form-control"
              value={body}
              onChange={e =>
                this.setState(
                  { summary: { ...summary, body: e.target.value } },
                  this.save
                )
              }
            />
            <small id="emailHelp" className="form-text text-muted">
              You can use **markdown**
            </small>
          </div>

          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="isPublic"
              checked={isPublic}
              onChange={e =>
                this.setState(
                  {
                    summary: { ...summary, isPublic: e.target.checked },
                  },
                  this.save
                )
              }
            />
            <label className="form-check-label" for="isPublic">
              Public?
            </label>
          </div>
          <button
            type="submit"
            className={`btn btn-block ${
              isDirty ? "btn-primary" : "btn-outline-primary"
            }`}
          >
            {isDirty ? "Save" : "Saved"}
          </button>
        </form>
      </div>
    );
  }
}

// https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes
// SummaryForm.propTypes = {};

export default SummaryForm;
