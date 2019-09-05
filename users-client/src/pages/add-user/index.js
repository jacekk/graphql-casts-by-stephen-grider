import { graphql } from 'react-apollo'

import { addUserMutation } from '../../queries/users'

import { AddUser } from './AddUser'

export const AddUserPage = graphql(addUserMutation)(AddUser)
