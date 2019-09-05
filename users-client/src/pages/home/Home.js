import React from 'react'

import { UsersList } from '../../components/UsersList'

export const Home = (props) => <div>{Array.isArray(props.data.users) && <UsersList users={props.data.users} />}</div>
