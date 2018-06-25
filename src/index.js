import React from "react";
import ReactDOM from "react-dom";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import "./assets/index.css";
import App from "./components/App/App";

const client = new ApolloClient({
  uri: "http://stackoverflow-questions-server.herokuapp.com/graphql"
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
