import React, { Component, useState } from "react";
import "./styles.css";

class App extends Component {
  render() {
    const relativeList = [
      { name: "relative1", key: "relativeListItem1" },
      { name: "relative2", key: "relativeListItem2" },
      { name: "relative3", key: "relativeListItem3" }
    ];

    return (
      <div id="main">
        {/* Do not remove the main div */}
        <ol key="relativeList">
          {relativeList.map((relative) => (
            <li key={relative.key}>{relative.name}</li>
          ))}
        </ol>
      </div>
    );
  }
}

export default App;
