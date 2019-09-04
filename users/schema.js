const got = require('got')
const graphql = require('graphql')

const {
	GraphQLInt,
	GraphQLList,
	GraphQLNonNull,
	GraphQLObjectType,
	GraphQLSchema,
	GraphQLString,
} = graphql

const routeToUrl = (route) => `http://localhost:3000/${route}`

const getRoute = (route) => {
	const url = routeToUrl(route)
	const respBody = (resp) => resp.body

	return got.get(url, { json: true }).then(respBody)
}

const CompanyType = new GraphQLObjectType({
	name: 'Company',
	fields: () => ({
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
		users: {
			type: new GraphQLList(UserType),
			resolve: (src, args) => getRoute(`companies/${src.id}/users`),
		},
	}),
})

const UserType = new GraphQLObjectType({
	name: 'User',
	fields: () => ({
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
			resolve: (src, args) => getRoute(`companies/${src.companyId}`),
		},
	}),
})

const RootQueryType = new GraphQLObjectType({
	name: 'RootQuery',
	fields: () => ({
		user: {
			type: UserType,
			args: {
				id: { type: GraphQLInt },
			},
			resolve: (src, args) => getRoute(`users/${args.id}`),
		},
		company: {
			type: CompanyType,
			args: { id: { type: GraphQLInt } },
			resolve: (src, args) => getRoute(`companies/${args.id}`),
		},
	}),
})

const RootMutationType = new GraphQLObjectType({
	name: 'RootMutation',
	fields: {
		addUser: {
			type: UserType,
			args: {
				name: { type: new GraphQLNonNull(GraphQLString) },
				username: { type: new GraphQLNonNull(GraphQLString) },
				companyId: { type: GraphQLInt },
			},
			resolve: async (src, args) => {
				const { name, username } = args
				const body = { name, username }
				const opts = { body, json: true }
				const resp = await got.post(routeToUrl('users'), opts)

				return resp.body
			},
		},
	},
})

module.exports.schema = new GraphQLSchema({
	mutation: RootMutationType,
	query: RootQueryType,
})
