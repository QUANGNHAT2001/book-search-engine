const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Book {
    authors: String
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }
  type User {
    username: String!
    email: String!
    savedBoooks: [Book]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String, password: String!): Auth
  }
`;

module.exports = typeDefs;
