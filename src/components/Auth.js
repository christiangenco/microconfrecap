import React, { Component } from "react";
// import PropTypes from "prop-types";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

export class Auth extends Component {
  componentWillMount() {
    this.uiConfig = {
      // Popup signin flow rather than redirect flow.
      signInFlow: "popup",
      // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
      signInSuccessUrl: "/signedIn",
      // We will display Google and Facebook as auth providers.
      signInOptions: [
        window.firebase.auth.GoogleAuthProvider.PROVIDER_ID
        // this.props.firebase.auth.FacebookAuthProvider.PROVIDER_ID
      ]
    };
  }

  componentDidMount() {
    this.unregisterAuthObserver = window.firebase
      .auth()
      .onAuthStateChanged(user => this.props.onAuthStateChanged(user));
  }

  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  render() {
    // const { firebase } = this.props;

    return (
      <StyledFirebaseAuth
        className={""}
        uiConfig={this.uiConfig}
        firebaseAuth={window.firebase.auth()}
      />
    );
  }
}

// https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes
// Auth.propTypes = {};

export default Auth;
