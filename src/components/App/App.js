import React, { Component } from "react";
import Search from "../Search/Search";

import { LayoutWrapper } from "../../shared/styled";

class App extends Component {
  render() {
    return (
      <LayoutWrapper>
        <Search />
      </LayoutWrapper>
    );
  }
}

export default App;
