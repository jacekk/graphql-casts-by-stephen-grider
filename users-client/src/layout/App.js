import { ApolloProvider } from 'react-apollo'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { Link } from '@reach/router'
import ApolloClient from 'apollo-client'
import React from 'react'

import { Routes } from './Routes'
import './App.sass'

const cache = new InMemoryCache()
const link = new HttpLink({
	uri: 'http://localhost:4000/graphql',
})
const client = new ApolloClient({ cache, link })

export const App = () => (
	<ApolloProvider client={client}>
		<div>
			<header>
				<img
					alt="logo"
					className="app-logo"
					src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo3.png"
				/>
				<nav className="app-menu">
					<Link to="/">Clients list</Link>
					<Link to="/add">Add new client</Link>
				</nav>
			</header>
			<main className="app-main">
				<Routes />
			</main>
		</div>
	</ApolloProvider>
)
