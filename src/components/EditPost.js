import React, { Component } from "react";
import produce from "immer";

import { HotKeys } from "react-hotkeys";

import brace from "brace";
import AceEditor from "react-ace";
import "brace/mode/markdown";
import "brace/theme/textmate";

// import PropTypes from "prop-types";

export class EditPost extends Component {
  state = {};

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      post: { isPublic: false, ...nextProps.post }
    };
  }

  save = () => {
    const { author, body, isPublic, title, id } = this.state.post;

    this.props.db
      .collection("posts")
      .doc(id)
      .set(
        {
          author,
          body,
          isPublic,
          title
        },
        { merge: true }
      )
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch(error => {
        console.error("Error writing document: ", error);
      });
  };

  render() {
    // return <pre>{JSON.stringify(this.state, null, 2)}</pre>;
    const { post } = this.state;
    const { author, title, body, isPublic } = post;

    const keyHandlers = {
      save: e => {
        e.preventDefault();
        this.save();
      }
    };

    return (
      <HotKeys handlers={keyHandlers}>
        <form>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              value={title}
              onChange={e => {
                this.setState({ post: { ...post, title: e.target.value } });
              }}
            />
          </div>

          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="isPublic"
              checked={isPublic}
              onChange={e => {
                console.log({ isPublic: e.target.checked });
                this.setState(
                  {
                    post: { ...post, isPublic: e.target.checked }
                  },
                  this.save
                );
              }}
            />
            <label className="form-check-label" htmlFor="isPublic">
              Public?
            </label>
          </div>

          <div
            className="card card-body"
            style={{ marginTop: 10, marginBottom: 10 }}
          >
            <h5 className="card-title">Author</h5>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={author.name}
                onChange={e => {
                  const name = e.target.value;
                  this.setState(
                    produce(draft => {
                      draft.post.author.name = name;
                    })
                  );
                }}
              />
            </div>
          </div>

          <AceEditor
            mode="markdown"
            theme="textmate"
            name="blah2"
            onLoad={() => {}}
            onChange={body =>
              this.setState({
                post: { ...post, body }
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

          <button type="submit" className="btn btn-primary btn-block">
            Save
          </button>
        </form>
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
      </HotKeys>
    );
  }
} // https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes
// EditPost.propTypes = {};
export default EditPost;
