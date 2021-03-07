const { AuthenticationError } = require("apollo-server-errors");
const { User, Book } = require("../models")
const { signToken } = require('../utils/auth');


module.exports = {
    Query: {
        //need a way to identify the active user
        me: () => User.findById().select("-password"),
    },
    Mutation: {
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError("credentials invalid")
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError("credentials invalid")
            }
            const token = signToken(user);
            return { token, user };
        },
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return{ token, user };
        },
        saveBook: (parent, { book }) => {
            // return User.update( 
            //     { _id: Auth.},
            //     {}
            // )
        },
        removeBook: (parent, { bookId }) => {
            // return User.update( 
            //     { _id: },
            //     {}
            // )
        },
    }
}