const { gql } = require('apollo-server-express');

const User = gql`
    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }

    type Book {
        _id: ID
        bookId:
        authors: [String]
        description: String
        title: String
        image: 
        link: String
    }

    type Auth {
        _id: ID
        token:
        user: User
    }

    type Query {
        me: User

    }

    type Mutation {

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


module.exports = { Thing };