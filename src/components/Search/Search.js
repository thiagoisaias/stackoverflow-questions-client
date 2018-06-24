import React from "react";
import PropTypes from "prop-types";

import {
  InputGroup,
  InputListWrapper,
  Subtitle,
  StyledForm,
  StyledInput,
  StyledLabel,
  SubmitButton,
  SubmitButtonWrapper,
  Title,
  Wrapper
} from "./styled";

const Search = props => {
  const { handleInputChange, handleQuerySubmit, queryArgs } = props;

  const handleSubmit = event => {
    event.preventDefault();
    console.log(queryArgs);
    handleQuerySubmit();
  };

  return (
    <Wrapper>
      <Title>Stack Overflow</Title>
      <StyledForm onSubmit={handleSubmit}>
        <Subtitle>Buscar na API</Subtitle>
        <InputListWrapper>
          <InputGroup>
            <StyledLabel> Tags </StyledLabel>
            <StyledInput
              type="text"
              name="tags"
              onChange={handleInputChange}
              value={queryArgs.tags}
            />
          </InputGroup>
          <InputGroup>
            <StyledLabel> Limit </StyledLabel>
            <StyledInput
              type="text"
              name="limit"
              onChange={handleInputChange}
              value={queryArgs.limit}
            />
          </InputGroup>
          <InputGroup>
            <StyledLabel> Score </StyledLabel>
            <StyledInput
              type="text"
              name="score"
              onChange={handleInputChange}
              value={queryArgs.score}
            />
          </InputGroup>
          <InputGroup>
            <StyledLabel> Sort </StyledLabel>
            <StyledInput
              type="text"
              name="sort"
              onChange={handleInputChange}
              value={queryArgs.sort}
            />
          </InputGroup>
        </InputListWrapper>
        <SubmitButtonWrapper>
          <SubmitButton>Buscar</SubmitButton>
        </SubmitButtonWrapper>
      </StyledForm>
    </Wrapper>
  );
};

Search.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  handleQuerySubmit: PropTypes.func.isRequired,
  queryArgs: PropTypes.shape({
    tags: PropTypes.string.isRequired,
    limit: PropTypes.string.isRequired,
    score: PropTypes.string.isRequired,
    sort: PropTypes.string.isRequired
  })
};

export default Search;
