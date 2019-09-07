import React from 'react'

import { Alert } from '../Alert'

export const UserCompanyPicker = (props) => {
	const { loading, error, companies } = props.data

	if (loading) {
		return <Alert msg="" />
	}
	if (error) {
		return <Alert type="danger" msg={error} />
	}
	if (!Array.isArray(companies) || !companies.length) {
		return <Alert type="warning" msg="No companies in the DB." />
	}

	const onSelectChange = (ev) => {
		const selected = ev.target.value
		const selectedId = selected && selected.length ? +selected : null
		const selectedItem = companies.find((item) => item.id === selectedId)
		props.onChange(selectedId, (selectedItem || {}).name)
	}

	return (
		<div className="form-group mb-0 ml-2 mr-2 flex-grow-1">
			<select
				className="form-control"
				defaultValue={props.user && props.user.company && props.user.company.id}
				onChange={onSelectChange}
			>
				<option key="none" value="">
					- choose a company -
				</option>
				{companies.map((company) => (
					<option key={company.id} value={company.id}>
						[{company.market}] {company.name} - {company.catchPhrase}
					</option>
				))}
			</select>
		</div>
	)
}
