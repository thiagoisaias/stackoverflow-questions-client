import React from "react";
import moment from "moment";
import styled from "styled-components";
import questionList from "../../../questions";

import Item from "../Item/Item";

const Wrapper = styled.div`
  margin: 32px 0;
`;

const List = () => {
  return (
    <Wrapper>
      {questionList.items.map(question => {
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
      })}
    </Wrapper>
  );
};

export default List;
