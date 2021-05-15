import React from "react"
import EmployeesOneMonth from "./EmployeesOneMonth"
import moment from "moment"

export default function EmployeesBirthday({ usersArr }) {
	// Cr [5,6,7,8,9,10,11,12,1,2,3,4]
	let monthArr = []
	const monthCurrent = moment().format("M")

	for (let i = 0; i < 12; i++) {
		monthArr.push(i + 1)
	}
	let newMonthArr2 = monthArr.splice(0, monthCurrent - 1)
	let newMonthArr3 = monthArr.concat(newMonthArr2)

	let activeUsers = usersArr.filter(el => el.status === "true")

	let component = newMonthArr3.map(month => {
		let usersByMonth = activeUsers.filter(user => {
			let userMonthNum = moment(user.dob).format("M") // "7"
			return +userMonthNum === month
		})
		return usersByMonth.length > 0 && <EmployeesOneMonth usersByMonth={usersByMonth} key={month} />
	})

	return (
		<div className="birthdayWrap">
			<h2>Employees birthday</h2>

			{activeUsers.length > 0 ? (
				<div className="list">{component}</div>
			) : (
				<div className="empty">Employees List is empty</div>
			)}
		</div>
	)
}
