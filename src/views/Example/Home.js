import React from "react";

import { withRouter } from "react-router";

class Home extends React.Component {
  render() {
    return (
      <div>
        Hello Everyone
      </div>
    )
  }
}

export default withRouter(Home);