const graphql = require('graphql')
const { find } = require('lodash')

const usersDb = require('./data/db.json')

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
			resolve(src, args) {
				return find(usersDb, { id: args.id })
			},
		},
	},
})

module.exports.schema = new GraphQLSchema({
	query: RootQueryType,
})
