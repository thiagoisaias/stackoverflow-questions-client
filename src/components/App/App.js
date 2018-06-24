import React, { Component } from "react";
import moment from "moment";
import QuestionList from "../Questions/List/List";
import Search from "../Search/Search";

import { LayoutWrapper } from "../../shared/styled";

import questionList from "../../questions";

/* Temporary! */
const parsedQuestionList = questionList.items.map(question => {
  const owner = {
    id: question.owner.user_id,
    name: question.owner.display_name,
    profileImage: question.owner.profile_image
  };
  return {
    id: question.question_id,
    createdAt: moment.unix(question.creation_date).format("MM[']YY"),
    numberOfAnswers: question.answer_count,
    owner: owner,
    score: question.score,
    tags: question.tags,
    title: question.title,
    url: question.link
  };
});

class App extends Component {
  render() {
    return (
      <LayoutWrapper>
        <Search />
        <QuestionList questionList={parsedQuestionList} isLoading={false} />
      </LayoutWrapper>
    );
  }
}

export default App;
