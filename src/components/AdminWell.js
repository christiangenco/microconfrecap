import React, { Component } from "react";
import Markdown from "react-markdown";

import { HotKeys } from "react-hotkeys";

import brace from "brace";
import AceEditor from "react-ace";
import "brace/mode/markdown";
import "brace/theme/textmate";

export class AdminWell extends Component {
  state = { isEditing: false, body: "" };

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      body: nextProps.body
    };
  }

  render() {
    const { isAdmin, onChange } = this.props;
    const { body, isEditing } = this.state;

    const keyHandlers = {
      save: e => {
        e.preventDefault();
        onChange({ body });
      }
    };

    return (
      <div className="card" style={{ marginTop: 20, marginBottom: 20 }}>
        <h5 className="card-header">
          {isAdmin && (
            <span>
              {!isEditing && (
                <button
                  className="btn btn-default btn-sm"
                  onClick={() => this.setState({ isEditing: true })}
                >
                  edit
                </button>
              )}

              {isEditing && (
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => onChange({ body })}
                >
                  save
                </button>
              )}
            </span>
          )}
          Housekeeping
        </h5>
        <div className="card-body">
          <div className="card-text">
            {isEditing && (
              <AceEditor
                mode="markdown"
                theme="textmate"
                name="blah2"
                onLoad={() => {}}
                onChange={body =>
                  this.setState({
                    body
                  })
                }
                fontSize={14}
                showPrintMargin={false}
                showGutter={true}
                highlightActiveLine={true}
                value={body}
                setOptions={{
                  // enableBasicAutocompletion: false,
                  // enableLiveAutocompletion: false,
                  // enableSnippets: false,
                  showLineNumbers: true,
                  tabSize: 2
                }}
              />
            )}

            {!isEditing && <Markdown source={body} />}
          </div>
        </div>
      </div>
    );
  }
}

// https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes
// AdminWell.propTypes = {};

export default AdminWell;
