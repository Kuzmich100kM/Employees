import React from "react"
import EmployeesOneUser from "./EmployeesOneUser"

export default function EmployeesOneChar({ char, usersByCharArr, valueCbFn }) {
	return (
		<div className="oneCharWrap">
			<div>{char}</div>
			{usersByCharArr.length ? (
				<div>
					{usersByCharArr.map(user => {
						return <EmployeesOneUser user={user} key={user.id} valueCbFn={valueCbFn} />
					})}
				</div>
			) : (
				<div className="empty">-----</div>
			)}
		</div>
	)
}
