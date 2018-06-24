import React from "react";
import PropTypes from "prop-types";

import Item from "../Item/Item";
import Spinner from "../../../shared/Spinner/Spinner";

import { EmptyListMessage, Wrapper } from "./styled";
import { ErrorMessage } from "../../../shared/styled";

const List = props => {
  const { error, isLoading, questionList } = props;

  const list = questionList.map(question => {
    return <Item key={question.id} {...question} />;
  });

  if (isLoading) return <Spinner size={36} color={"#777"} />;
  if (error) return <ErrorMessage>{error}</ErrorMessage>;

  return (
    <Wrapper>
      {list.length === 0 ? (
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
  error: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  questionList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      createdAt: PropTypes.string,
      numberOfAnswers: PropTypes.number,
      user: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        profileImage: PropTypes.string
      }),
      score: PropTypes.number,
      tags: PropTypes.arrayOf(PropTypes.string),
      title: PropTypes.string,
      url: PropTypes.string
    })
  ).isRequired
};

export default List;
