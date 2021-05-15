import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { userAPI } from "../../api"
import { getAllUsersAC } from "../../reducers/employees.reducer"
import { Preloader } from "../common/Preloader/Preloader"
import EmployeesList from "./EmployeesList"
import EmployeesBirthday from "./EmployeesBirthday"

export default function Employees() {
	const [isLoading, setisLoading] = useState(true)
	const dispatch = useDispatch()
	const usersArr = useSelector(state => state.employeesPage.users)

	let getStorageData = () => {
		let dataObj = {}
		for (let i = 0; i < localStorage.length; i++) {
			let key = localStorage.key(i)
			dataObj[key] = localStorage.getItem(key)
		}
		return dataObj
	}

	useEffect(() => {
		isLoading &&
			userAPI.getAllUsers().then(({ data }) => {
				let storageData = getStorageData()
				let addingData = data.map(el =>
					storageData[el.id] !== undefined ? { ...el, status: storageData[el.id] } : { ...el, status: "false" }
				)
				dispatch(getAllUsersAC(addingData))
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
					<EmployeesBirthday usersArr={usersArr} />
				</div>
			)}
		</>
	)
}
