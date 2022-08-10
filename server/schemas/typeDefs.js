const { gql } = require('apollo-server-express');

const typeDefs = gql`
     type user {
        _id: ID
    }
`;

module.exports = typeDefs