const cors = require('cors')
const express = require('express')
const expressGraphQL = require('express-graphql')

const { schema } = require('./schema')

const app = express()

app.use(cors())
app.use(
	'/graphql',
	expressGraphQL({
		graphiql: true,
		schema,
	})
)

app.listen(4000, () => {
	console.debug('App is listening on port 4000 ...')
})
