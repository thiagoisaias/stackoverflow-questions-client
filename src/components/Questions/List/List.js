import React from "react";
import PropTypes from "prop-types";

import Item from "../Item/Item";
import Spinner from "../../../shared/Spinner/Spinner";

import { EmptyListMessage, Wrapper } from "./styled";

const List = props => {
  const { isLoading, questionList } = props;

  const list = questionList.map(question => {
    return <Item key={question.id} {...question} />;
  });

  return (
    <Wrapper>
      {isLoading ? (
        <Spinner size={36} color={"#777"} />
      ) : list.length === 0 ? (
        <EmptyListMessage>
          Nenhum resultado encontrado! Tente alterar os parâmetros de busca.
        </EmptyListMessage>
      ) : (
        list
      )}
    </Wrapper>
  );
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
