const { GraphQLServer } = require('graphql-yoga');
const path = require('path');
const resolvers = require('./resolvers');
const mongoose = require('mongoose');

mongoose.connect('mongodb://admin:admin@localhost:27017/graphqlnode?authSource=admin&w=1', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const server = new GraphQLServer({
    typeDefs: path.resolve(__dirname, 'schema.graphql'),
    resolvers: resolvers
});

server.start();