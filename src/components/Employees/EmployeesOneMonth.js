import moment from "moment"

export default function EmployeesOneMonth({ usersByMonth }) {
	let monthWord = moment(usersByMonth[0].dob).format("MMMM") // May

	usersByMonth.sort((a, b) => {
		let nameA = a.lastName.toLowerCase()
		let nameB = b.lastName.toLowerCase()
		if (nameA < nameB) return -1
		if (nameA > nameB) return 1
		return 0
	})

	return (
		<div className="oneMonthWrap">
			<div>{monthWord}</div>
			<div>
				{usersByMonth.map(({ lastName, firstName, id, dob }) => {
					const date = moment(dob).format("DD MMM, YYYY")
					return (
						<div className="name" key={id}>
							{lastName} {firstName} - {date} year
						</div>
					)
				})}
			</div>
		</div>
	)
}
