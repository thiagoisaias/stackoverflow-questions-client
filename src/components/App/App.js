import React, { Component } from "react";
import QuestionList from "../Questions/List/List";
import Search from "../Search/Search";

import { LayoutWrapper } from "../../shared/styled";

import questionList from "../../questions";

class App extends Component {
  render() {
    return (
      <LayoutWrapper>
        <Search />
        <QuestionList questionList={questionList.items} isLoading={true} />
      </LayoutWrapper>
    );
  }
}

export default App;
