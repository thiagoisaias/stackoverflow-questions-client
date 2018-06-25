import React, { Component } from "react";
import PropTypes from "prop-types";
import { withApollo } from "react-apollo";
import gql from "graphql-tag";

import QuestionList from "../Questions/List/List";
import Search from "../Search/Search";

import { LayoutWrapper } from "../../shared/styled";

const GET_QUESTIONS = gql`
  query getQuestions(
    $limit: String
    $score: String
    $sort: String
    $tags: String!
  ) {
    getQuestions(limit: $limit, score: $score, sort: $sort, tags: $tags) {
      id
      createdAt
      numberOfAnswers
      score
      tags
      title
      url
      user {
        id
        name
        profileImage
      }
    }
  }
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      queryArgs: {
        tags: "",
        limit: "",
        score: "",
        sort: "votes"
      },
      isLoading: false,
      questionList: []
    };
  }

  handleQueryArgsChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      ...this.state,
      queryArgs: {
        ...this.state.queryArgs,
        [name]: value
      }
    });
  };

  handleQuerySubmit = () => {
    const { tags, ...rest } = this.state.queryArgs;

    this.setState({
      ...this.state,
      isLoading: true
    });

    this.props.client
      .query({
        query: GET_QUESTIONS,
        variables: { tags: `javascript;${tags}`, ...rest }
      })
      .then(response => {
        this.setState({
          ...this.state,
          isLoading: false,
          error: null,
          questionList: response.data.getQuestions
        });
      })
      .catch(error => {
        this.setState({
          ...this.state,
          isLoading: false,
          error:
            (error.response && error.response.data) || "Something went wrong."
        });
      });
  };

  componentDidMount() {
    this.handleQuerySubmit();
  }

  render() {
    return (
      <LayoutWrapper>
        <Search
          handleInputChange={this.handleQueryArgsChange}
          handleQuerySubmit={this.handleQuerySubmit}
          queryArgs={this.state.queryArgs}
        />
        <QuestionList
          questionList={this.state.questionList}
          isLoading={this.state.isLoading}
          error={this.state.error}
        />
      </LayoutWrapper>
    );
  }
}

App.propTypes = {
  client: PropTypes.object.isRequired
};

export default withApollo(App);
