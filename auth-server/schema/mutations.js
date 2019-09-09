const graphql = require('graphql')

const types = require('./types')
const { AuthService } = require('../services/AuthService')

const { GraphQLObjectType, GraphQLString, GraphQLNonNull } = graphql

const RootMutationType = new GraphQLObjectType({
	name: 'RootMutation',
	fields: {
		signup: {
			type: types.UserType,
			args: {
				email: { type: new GraphQLNonNull(GraphQLString) },
				password: { type: new GraphQLNonNull(GraphQLString) },
			},
			resolve(src, args, req) {
				const { email, password } = args

				return AuthService.signup({ email, password, req })
			},
		},
		logout: {
			type: types.UserType,
			resolve(src, args, req) {
				req.logout()

				return req.user
			},
		},
		login: {
			type: types.UserType,
			args: {
				email: { type: new GraphQLNonNull(GraphQLString) },
				password: { type: new GraphQLNonNull(GraphQLString) },
			},
			resolve(src, args, req) {
				const { email, password } = args

				return AuthService.login({ email, password, req })
			},
		},
	},
})

module.exports = RootMutationType
