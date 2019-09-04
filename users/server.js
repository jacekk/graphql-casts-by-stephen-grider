const express = require('express')
const expressGraphQL = require('express-graphql')

const { schema } = require('./schema')

const app = express()

app.use(
	'/query',
	expressGraphQL({
		graphiql: true,
		schema,
	})
)

app.listen(4000, () => {
	console.log('App is listening on port 4000 ...')
})
