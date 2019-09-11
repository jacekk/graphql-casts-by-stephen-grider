const graphql = require('graphql')
const mongoose = require('mongoose')

const User = mongoose.model('user')
const { GraphQLObjectType, GraphQLList } = graphql

const types = require('./types')

const RootQueryType = new GraphQLObjectType({
	name: 'RootQuery',
	fields: {
		currentUser: {
			type: types.UserType,
			resolve: (src, args, req) => {
				return req.user
			},
		},
		allUsers: {
			type: new GraphQLList(types.UserType),
			resolve: () => User.find({}),
		},
	},
})

module.exports = RootQueryType
