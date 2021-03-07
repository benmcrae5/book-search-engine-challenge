const { gql } = require('apollo-server-express');

module.exports = gql`
    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }

    type Book {
        bookId: ID
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }

    input BookInput {
        bookId: ID!
        authors: [String!]!
        description: String!
        title: String!
        image: String!
        link: String!
    }

    type Auth {
        token: String
        user: User
    }

    type Query {
        me: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(book: BookInput!): User
        removeBook(bookId: ID): User
    }
`;


// username: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//     match: [/.+@.+\..+/, 'Must use a valid email address'],
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   // set savedBooks to be an array of data that adheres to the bookSchema
//   savedBooks: [bookSchema],
// },
// // set this to use virtual below
// {
//   toJSON: {
//     virtuals: true,
//   },
