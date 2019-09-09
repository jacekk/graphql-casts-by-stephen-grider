const graphql = require('graphql')

const { GraphQLObjectType } = graphql

const types = require('./types')

const RootQueryType = new GraphQLObjectType({
	name: 'RootQuery',
	fields: {
		user: {
			type: types.UserType,
			resolve: (src, args, req) => {
				return req.user
			},
		},
	},
})

module.exports = RootQueryType
