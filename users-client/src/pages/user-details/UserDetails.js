import React, { useState } from 'react'

import { Alert } from '../../components/Alert'
import { UserCompanyPickerForm } from '../../components/UserCompanyPickerForm'

import './UserDetails.sass'

const addressToSingleLine = (address) => {
	if (!address) {
		return '-'
	}

	return [address.street, ' / ', address.suite, ' / ', address.zipcode, ' ', address.city].filter(Boolean).join('')
}

export const UserDetails = (props) => {
	const [companyId, setCompanyId] = useState(user && user.company && user.company.id)
	const [isEditMode, setEditMode] = useState(false)
	const { error, user, loading } = props.data

	if (loading) {
		return <Alert msg="loading user data..." />
	}
	if (error) {
		return <Alert type="danger" msg={error} />
	}
	if (!user) {
		return <Alert type="danger" msg="Sth went wrong. User details cannot be displayed" />
	}

	const onCompanySave = () => {
		const variables = {
			companyId: companyId ? +companyId : null,
			userId: user.id,
		}
		setEditMode(false)
		props.mutate({ variables })
	}

	return (
		<div className="user-details__wrapper">
			<div className="card user-details__card">
				<div className="card-body">
					<h5 className="card-title">{user.name}</h5>
					<h6 className="card-subtitle mb-3 text-muted">ID: {user.id}</h6>
					<ul className="list-group list-group-flush">
						<li className="list-group-item">
							Username: <b>{user.username}</b>
						</li>
						<li className="list-group-item">
							Email: <b>{user.email}</b>
						</li>
						<li className="list-group-item">
							Phone: <b>{user.phone}</b>
						</li>
						<li className="list-group-item">
							Website: <b>{user.website}</b>
						</li>
						<li className="list-group-item">
							Address: <b>{addressToSingleLine(user.address)}</b>
						</li>
						<li className="list-group-item d-flex align-items-center justify-content-between">
							{!isEditMode && (
								<>
									<span>
										Company:
										<b className="ml-1">{(user.company || {}).name || '-'}</b>
									</span>
									<button
										className="btn btn-default btn-sm"
										onClick={() => setEditMode(true)}
										type="button"
									>
										<i className="fas fa-edit"></i>
									</button>
								</>
							)}
							{isEditMode && (
								<>
									<span>Company:</span>
									<UserCompanyPickerForm
										user={user}
										onChange={(selectedId) => setCompanyId(selectedId)}
									/>
									<button className="btn btn-default btn-sm " onClick={onCompanySave} type="button">
										<i className="fas fa-save"></i>
									</button>
								</>
							)}
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
