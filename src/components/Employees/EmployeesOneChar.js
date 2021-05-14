import React from "react"
import FormPanel from "../common/FormHooks"

export default function EmployeesOneChar({ char, usersByCharArr }) {
	console.log("usersByCharArr :>> ", usersByCharArr)
	const initValue = { radiooo: "false" }
	const initModels = [
		{
			name: "radiooo",
			type: "radio",
			options: [
				{ value: "false", name: "not active" },
				{ value: "true", name: "active" },
			],
		},
	]
	return (
		<div className="oneCharWrap">
			<div>{char}</div>
			{usersByCharArr.length ? (
				<div>
					{usersByCharArr.map(({ lastName, firstName, id }) => {
						return (
							<div key={id}>
								<div className="name">
									{lastName} {firstName}
								</div>
								<FormPanel
									initValue={initValue}
									initModels={initModels}
									//valueCb={valueCb}
								/>
							</div>
						)
					})}
				</div>
			) : (
				<div className="empty">-----</div>
			)}
		</div>
	)
}

// Сортировка по дате
// goalsArr.sort(function (a, b) {
// 	var c = new Date(a.updatedAt)
// 	var d = new Date(b.updatedAt)
// 	return d - c
// })
