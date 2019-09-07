const got = require('got')
const graphql = require('graphql')

const { GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLSchema, GraphQLString } = graphql

const routeToUrl = (route) => `http://localhost:3000/${route}`

const onGetSuccess = (resp) => {
	console.debug('onGetSuccess', resp.url, resp.statusCode, resp.statusMessage)

	return resp.body
}

const onGetError = (err) => {
	console.error('onGetError', err)

	throw err
}

const getRoute = (route) => {
	const url = routeToUrl(route)
	const opts = { json: true }
	console.debug('getRoute', route, url)

	return got
		.get(url, opts)
		.then(onGetSuccess)
		.catch(onGetError)
}

const GeoType = new GraphQLObjectType({
	name: 'Geo',
	fields: () => ({
		lat: {
			type: GraphQLString,
		},
		lng: {
			type: GraphQLString,
		},
	}),
})

const AddressType = new GraphQLObjectType({
	name: 'Address',
	fields: () => ({
		street: {
			type: GraphQLString,
		},
		suite: {
			type: GraphQLString,
		},
		city: {
			type: GraphQLString,
		},
		zipcode: {
			type: GraphQLString,
		},
		geo: {
			type: GeoType,
		},
	}),
})

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
		email: {
			type: GraphQLString,
		},
		phone: {
			type: GraphQLString,
		},
		website: {
			type: GraphQLString,
		},
		address: {
			type: AddressType,
		},
		company: {
			type: CompanyType,
			resolve: (src, args) => {
				if (!src.companyId) {
					return null
				}
				return getRoute(`companies/${src.companyId}`)
			},
		},
	}),
})

const RootQueryType = new GraphQLObjectType({
	name: 'RootQuery',
	fields: () => ({
		users: {
			type: new GraphQLList(UserType),
			resolve: (src, args) => getRoute('users'),
		},
		user: {
			type: UserType,
			args: {
				id: { type: GraphQLInt },
			},
			resolve: (src, args) => getRoute(`users/${args.id}`),
		},
		companies: {
			type: new GraphQLList(CompanyType),
			resolve: (src, args) => getRoute('companies'),
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
				companyId: { type: GraphQLInt },
				name: { type: new GraphQLNonNull(GraphQLString) },
				username: { type: new GraphQLNonNull(GraphQLString) },
			},
			resolve: async (src, args) => {
				const { name, username, companyId } = args
				const body = { name, username, companyId }
				const opts = { body, json: true }
				const resp = await got.post(routeToUrl('users'), opts)

				return resp.body
			},
		},
		editUser: {
			type: UserType,
			args: {
				companyId: { type: GraphQLInt },
				id: { type: new GraphQLNonNull(GraphQLInt) },
				name: { type: GraphQLString },
				username: { type: GraphQLString },
			},
			resolve: async (src, args) => {
				const { name, username, companyId, id } = args
				const body = { name, username, companyId }
				const opts = { body, json: true }
				const resp = await got.patch(routeToUrl(`users/${id}`), opts)

				return resp.body
			},
		},
		deleteUser: {
			type: UserType,
			args: {
				id: { type: new GraphQLNonNull(GraphQLInt) },
			},
			resolve: async (src, args) => {
				const { id } = args
				const url = routeToUrl(`users/${id}`)
				await got.delete(url, { json: true })

				return { id }
			},
		},
		setUserCompany: {
			type: UserType,
			args: {
				userId: { type: new GraphQLNonNull(GraphQLInt) },
				companyId: { type: GraphQLInt },
			},
			resolve: async (src, args) => {
				const { userId, companyId } = args

				const user = await getRoute(`users/${userId}`)
				const body = { companyId: null }

				if (companyId) {
					const company = await getRoute(`companies/${companyId}`)
					body.companyId = company.id
				}

				const opts = { body, json: true }
				const resp = await got.patch(routeToUrl(`users/${user.id}`), opts)

				return resp.body
			},
		},
	},
})

module.exports.schema = new GraphQLSchema({
	mutation: RootMutationType,
	query: RootQueryType,
})
