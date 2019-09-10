const graphql = require('graphql')

const { GraphQLObjectType } = graphql

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
	},
})

module.exports = RootQueryType
