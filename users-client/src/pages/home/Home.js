import React from 'react'

import { UsersList } from '../../components/UsersList'

import './Home.sass'

export const Home = (props) => (
	<>{Array.isArray(props.data.users) ? <UsersList users={props.data.users} /> : 'No users yet :('}</>
)
