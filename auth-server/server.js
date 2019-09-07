const cors = require('cors')
const express = require('express')

const app = express()

app.use(cors())

app.use((req, res) => {
	const now = new Date()

	res.send(`Now is: ${now.toString()}.`)
})

app.listen(4000, () => {
	console.debug('App is listening on port 4000 ...')
})
