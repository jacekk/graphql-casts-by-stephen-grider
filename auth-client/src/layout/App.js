import { ApolloProvider } from 'react-apollo'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import ApolloClient from 'apollo-client'
import React from 'react'

import { Navbar } from './Navbar'
import { Routes } from './Routes'
import './App.sass'

const dataIdFromObject = (o) => o.id
const cache = new InMemoryCache()
const link = createHttpLink({
	uri: 'http://localhost:4000/graphql',
	credentials: 'same-origin',
})
const client = new ApolloClient({ cache, dataIdFromObject, link })

export const App = () => (
	<ApolloProvider client={client}>
		<div className="app-wrapper">
			<Navbar />
			<main className="container app-main">
				<Routes />
			</main>
		</div>
	</ApolloProvider>
)
