import React from "react";
import ReactDOM from "react-dom";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import "./assets/index.css";
import App from "./components/App/App";

const client = new ApolloClient({
  uri:
    process.env.NODE_ENV === "production"
      ? "https://stackoverflow-questions-server.herokuapp.com/graphql"
      : "http://localhost:4000/graphql"
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
