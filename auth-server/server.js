const ConnectMongo = require('connect-mongo')
const cors = require('cors')
const express = require('express')
const expressGraphQL = require('express-graphql')
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')

require('dotenv').config()
require('./models') // has to be invoked/required before any service

const schema = require('./schema')

const MONGOOSE_OPTIONS = { useNewUrlParser: true, useUnifiedTopology: true }
const MongoStore = ConnectMongo(session)
const app = express()

mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGO_URI, MONGOOSE_OPTIONS)
mongoose.connection
	.once('open', () => console.log('Connected to Mongo instance.'))
	.on('error', (err) => console.log('Error connecting to Mongo:', err))

const sessionMiddleware = session({
	// note `resave` and `saveUninitialized`: https://stackoverflow.com/a/40396102
	resave: true,
	saveUninitialized: false, // to not store guests sessions: https://github.com/expressjs/session#saveuninitialized
	secret: process.env.SESSION_SECRET,
	store: new MongoStore({
		url: process.env.MONGO_URI,
		autoReconnect: true,
	}),
})
const graphQLMiddleware = expressGraphQL({
	schema,
	graphiql: true,
})
const corsOptions = {
	credentials: true,
	origin: true,
}

app.use(cors(corsOptions))
app.use(sessionMiddleware)
app.use(passport.initialize())
app.use(passport.session())
app.use('/graphql', graphQLMiddleware)

app.listen(4000, () => {
	console.debug('App is listening on port 4000 ...')
})
