import React from "react";

function Error(props) {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-md-12 center">
          <h3>Error: {props.errorMensaje}</h3>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Error;
