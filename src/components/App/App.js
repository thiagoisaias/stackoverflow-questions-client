import React, { Component } from "react";
import QuestionList from "../Questions/List/List";
import Search from "../Search/Search";

import { LayoutWrapper } from "../../shared/styled";

class App extends Component {
  render() {
    return (
      <LayoutWrapper>
        <Search />
        <QuestionList />
      </LayoutWrapper>
    );
  }
}

export default App;
