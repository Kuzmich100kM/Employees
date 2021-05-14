import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { userAPI } from "../../api"
import { getAllUsersAC } from "../../reducers/employees.reducer"
import { Preloader } from "../common/Preloader/Preloader"
import EmployeesList from "./EmployeesList"
import EmployeesBirthday from "./EmployeesBirthday"

export default function Employees() {
	const [isLoading, setisLoading] = useState(true)
	const usersArr = useSelector(state => state.employeesPage.users)

	const dispatch = useDispatch()

	// const startStopBot = (stratStatus, stratId) => dispatch(startStopBotTC(stratStatus, stratId))
	// const pauseBot = (isPause, stratId) => dispatch(pauseBotTC(isPause, stratId))

	useEffect(() => {
		isLoading &&
			userAPI.getAllUsers().then(res => {
				console.log("res :>> ", res.data)
				dispatch(getAllUsersAC(res.data))
				setisLoading(false)
			})
	}, [isLoading, dispatch])

	return (
		<>
			{isLoading ? (
				<Preloader />
			) : (
				<div className="employees">
					<EmployeesList usersArr={usersArr} />
					<EmployeesBirthday />
				</div>
			)}
		</>
	)
}
