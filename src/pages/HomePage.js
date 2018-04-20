import React, { Component } from "react";
import { Link } from "react-router-dom";
import AdminWell from "../components/AdminWell";

// import PropTypes from 'prop-types';

export class HomePage extends Component {
  render() {
    return (
      <div>
        <AdminWell />

        <h2>Growth</h2>
        <ul>
          <li>
            <Link to="/fomo">Is FOMO holding you back?</Link> by Natalie Nagele
          </li>
          <li>Russ Henneberry, The Perfect Content Marketing Strategy</li>
          <li>
            James Kennedy, How to Stop Giving Demos and Build a Sales Factory
            Instead
          </li>
          <li>Bridget Harris, Bootstrapping for Badasses</li>
          <li>Attendee Talks</li>
          <li>
            Derrick Reimer, Transforming Customer Input into Killer Features
          </li>
          <li>Andy Baldacci, Profitable content marketing in 1 hour a week</li>
          <li>
            Brennan Dunn, Personalizing Your Marketing: Why You Should Be
            Niching In Real-Time
          </li>
          <li>
            Dave Churchville, Making Facebook Ads profitable for your SaaS
          </li>
          <li>
            Rob Walling, 11 Years to Overnight Success: From Beach Towels to A
            Successful Exit
          </li>
        </ul>

        <h2>Starter</h2>
      </div>
    );
  }
} // https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes
// HomePage.propTypes = {};
export default HomePage;
