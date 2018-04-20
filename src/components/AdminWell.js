import React, { Component } from "react";

const AdminWell = props => {
  return (
    <div className="card" style={{ marginTop: 20, marginBottom: 20 }}>
      <h5 className="card-header">
        Housekeeping <button className="btn btn-default btn-sm">edit</button>
      </h5>
      <div className="card-body">
        <div className="card-text">
          <ul>
            <li>
              <a href="http://microconf.com/growth/schedule">Schedule</a>
            </li>
            <li>
              tweet{" "}
              <a href="https://twitter.com/search?q=%23microconf">#microconf</a>
            </li>
            <li>
              <a href="https://twitter.com/intent/+/tweet?original_referer=https://shai.io/microconf/&url=https://shai.io/microconf/&text=MicroConf%202017%20Official%20Notes%20%23microconf&via=shaisc">
                Share these notes
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminWell;
