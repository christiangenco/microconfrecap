import React, { Component } from "react";
// import PropTypes from "prop-types";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

export class Auth extends Component {
  state = { user: null };
  componentWillMount() {
    this.uiConfig = {
      // Popup signin flow rather than redirect flow.
      signInFlow: "popup",
      // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
      signInSuccessUrl: "/",
      // We will display Google and Facebook as auth providers.
      signInOptions: [
        window.firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        // this.props.firebase.auth.FacebookAuthProvider.PROVIDER_ID
      ],
    };
  }

  componentDidMount() {
    this.unregisterAuthObserver = window.firebase
      .auth()
      .onAuthStateChanged(user => {
        this.setState({ user });
        this.props.onAuthStateChanged(user);
      });
  }

  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  render() {
    // const { firebase } = this.props;
    const { user } = this.state;

    return (
      <div>
        <div style={{ display: user ? "none" : "block" }}>
          <StyledFirebaseAuth
            className={""}
            uiConfig={this.uiConfig}
            firebaseAuth={window.firebase.auth()}
          />
        </div>
        {user && (
          <div>
            {user.displayName}{" "}
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={e => window.firebase.auth().signOut()}
            >
              logout
            </button>
          </div>
        )}
      </div>
    );
  }
}

// https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes
// Auth.propTypes = {};

export default Auth;
