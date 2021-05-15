import React, { useCallback } from "react"
import { useDispatch } from "react-redux"
import { changeUserStatusAC } from "../../reducers/employees.reducer"
import EmployeesOneChar from "./EmployeesOneChar"

export default function EmployeesList({ usersArr }) {
	let charsArr = []
	const dispatch = useDispatch()
	for (let i = 0; i < 26; i++) {
		charsArr.push(String.fromCharCode(65 + i))
	}

	const valueCbFn = useCallback(
		(id, value) => {
			localStorage.setItem(id, value.radiooo)
			dispatch(changeUserStatusAC({ id, status: value.radiooo }))
		},
		[dispatch]
	)

	return (
		<div className="listWrap">
			<h2>Employees</h2>
			<div className="list">
				{charsArr.map(char => {
					let usersByCharArr = usersArr.filter(user => user.lastName.substring(0, 1) === char)
					return <EmployeesOneChar char={char} usersByCharArr={usersByCharArr} valueCbFn={valueCbFn} key={char} />
				})}
			</div>
		</div>
	)
}
