const got = require('got')
const graphql = require('graphql')

const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema } = graphql

const UserType = new GraphQLObjectType({
	name: 'User',
	fields: {
		id: {
			type: GraphQLInt,
		},
		name: {
			type: GraphQLString,
		},
		username: {
			type: GraphQLString,
		},
	},
})

const RootQueryType = new GraphQLObjectType({
	name: 'RootQuery',
	fields: {
		user: {
			type: UserType,
			args: {
				id: { type: GraphQLInt },
			},
			resolve: async (src, args) => {
				const url = `http://localhost:3000/users/${args.id}`
				const resp = await got.get(url, { json: true })

				return resp.body
			},
		},
	},
})

module.exports.schema = new GraphQLSchema({
	query: RootQueryType,
})
