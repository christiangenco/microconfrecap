import React, { Component } from "react";
// import PropTypes from "prop-types";

import Summary from "../components/Summary";
import SummaryForm from "../components/SummaryForm";

export class SummariesPage extends Component {
  state = { summaries: {} };
  componentDidMount() {
    const { db, slug, user } = this.props;

    this.unsubscribe = db
      .collection("posts")
      .doc(slug)
      .collection("summaries")
      // .orderBy("votes")
      .onSnapshot(snap => {
        const summaries = {};
        snap.forEach(doc => {
          console.log(doc.data());
          summaries[doc.id] = { ...doc.data(), id: doc.id };
        });
        this.setState({ summaries });
      });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { user, slug, db } = this.props;
    const { summaries } = this.state;

    const userSummary = summaries[user.uid];
    console.dir({ summaries, userSummary });

    return (
      <div>
        <SummaryForm
          value={userSummary}
          user={user}
          slug={slug}
          onChange={summary => {
            db
              .collection("posts")
              .doc(slug)
              .collection("summaries")
              // .doc(user.uid)
              .doc("lol")
              .set(summary, { merge: true });
          }}
        />

        <hr />

        {Object.values(summaries).map(summary => (
          <Summary key={summary.id} summary={summary} />
        ))}
      </div>
    );
  }
}

// https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes
// SummariesPage.propTypes = {};

export default SummariesPage;
