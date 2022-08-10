const { User } = require('../models')
const { AuthenticationError } = require("apollo-server-express");

const resolvers = {
    Query: {
        user: async (parent, { username }) => {
            return User.findOne({ username })
            .populate('username')
        }
    },
}

module.exports = resolvers;