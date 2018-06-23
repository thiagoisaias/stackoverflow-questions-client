import React, { Component } from "react";

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

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tag: "",
      limit: "",
      score: "",
      sort: ""
    };
  }

  handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <Wrapper>
        <Title>Stack Overflow</Title>
        <StyledForm onSubmit={this.handleSubmit}>
          <Subtitle>Buscar na API</Subtitle>
          <InputListWrapper>
            <InputGroup>
              <StyledLabel> Tag </StyledLabel>
              <StyledInput
                type="text"
                name="tag"
                onChange={this.handleChange}
                value={this.state.tag}
              />
            </InputGroup>
            <InputGroup>
              <StyledLabel> Limit </StyledLabel>
              <StyledInput
                type="text"
                name="limit"
                onChange={this.handleChange}
                value={this.state.limit}
              />
            </InputGroup>
            <InputGroup>
              <StyledLabel> Score </StyledLabel>
              <StyledInput
                type="text"
                name="score"
                onChange={this.handleChange}
                value={this.state.score}
              />
            </InputGroup>
            <InputGroup>
              <StyledLabel> Sort </StyledLabel>
              <StyledInput
                type="text"
                name="sort"
                onChange={this.handleChange}
                value={this.state.sort}
              />
            </InputGroup>
          </InputListWrapper>
          <SubmitButtonWrapper>
            <SubmitButton>Buscar</SubmitButton>
          </SubmitButtonWrapper>
        </StyledForm>
      </Wrapper>
    );
  }
}

export default Search;
