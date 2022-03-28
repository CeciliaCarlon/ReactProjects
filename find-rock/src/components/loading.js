import React from "react";
import "./loading.css";

function Loading() {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-md-12 center">
          <h3>Loading</h3>
          <div className="loader"></div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Loading;
