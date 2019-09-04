const got = require('got')
const graphql = require('graphql')

const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema } = graphql

const routeToUrl = (route) => `http://localhost:3000/${route}`

const CompanyType = new GraphQLObjectType({
	name: 'Company',
	fields: {
		id: {
			type: GraphQLInt,
		},
		name: {
			type: GraphQLString,
		},
		catchPhrase: {
			type: GraphQLString,
		},
		market: {
			type: GraphQLString,
		},
	},
})

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
		company: {
			type: CompanyType,
			resolve: async (src, args) => {
				const url = routeToUrl(`companies/${src.companyId}`)
				const resp = await got.get(url, { json: true })

				return resp.body
			},
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
				const url = routeToUrl(`users/${args.id}`)
				const resp = await got.get(url, { json: true })

				return resp.body
			},
		},
	},
})

module.exports.schema = new GraphQLSchema({
	query: RootQueryType,
})
