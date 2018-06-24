import React from "react";
import moment from "moment";
import styled from "styled-components";
import PropTypes from "prop-types";

import Item from "../Item/Item";
import Spinner from "../../../shared/Spinner/Spinner";

const Wrapper = styled.div`
  margin: 32px 0;
`;

const List = props => {
  const { isLoading, questionList } = props;

  const list = questionList.map(question => {
    const owner = {
      id: question.owner.user_id,
      name: question.owner.display_name,
      profileImage: question.owner.profile_image
    };

    return (
      <Item
        key={question.question_id}
        id={question.question_id}
        createdAt={moment.unix(question.creation_date).format("MM[']YY")}
        numberOfAnswers={question.answer_count}
        owner={owner}
        score={question.score}
        tags={question.tags}
        title={question.title}
        url={question.link}
      />
    );
  });

  return <Wrapper>{ isLoading ? <Spinner size={36} color={"#777"} /> : list}</Wrapper>;
};

List.propTypes = {
  isLoading: PropTypes.bool,
  questionList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      createdAt: PropTypes.string,
      numberOfAnswers: PropTypes.number,
      owner: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        profileImage: PropTypes.string
      }),
      score: PropTypes.number,
      tags: PropTypes.arrayOf(PropTypes.string),
      title: PropTypes.string,
      url: PropTypes.string
    })
  )
};

export default List;
