import React from "react"
import EmployeesOneChar from "./EmployeesOneChar"

export default function EmployeesList({ usersArr }) {
	let charsArr = []

	for (let i = 0; i < 26; i++) {
		charsArr.push(String.fromCharCode(65 + i))
	}

	return (
		<div className="listWrap">
			<h2>Employees</h2>
			<div className="list">
				{charsArr.map(char => {
					let usersByCharArr = usersArr.filter(user => user.lastName.substring(0, 1) === char && user)
					return <EmployeesOneChar char={char} usersByCharArr={usersByCharArr} key={char} />
				})}
			</div>
		</div>
	)
}
