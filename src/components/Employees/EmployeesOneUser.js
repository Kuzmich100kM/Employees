import React from "react"
import FormPanel from "../common/FormHooks"

export default function EmployeesOneUser({ user, valueCbFn }) {
	let { lastName, firstName, id } = user

	let initValue = {
		radiooo: user.status,
	}

	let initModels = [
		{
			name: "radiooo",
			type: "radio",
			options: [
				{ value: "false", name: "not active" },
				{ value: "true", name: "active" },
			],
		},
	]

	let valueCb = value => valueCbFn(id, value)

	return (
		<div className="oneUserWrap">
			<div className={user.status === "true" ? "name active" : "name"}>
				{lastName} {firstName}
			</div>
			<FormPanel initValue={initValue} initModels={initModels} valueCb={valueCb} />
		</div>
	)
}
