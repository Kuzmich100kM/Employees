import { userAPI } from "../api"

const GET_ALL_EMPLOYEES = "GET_ALL_EMPLOYEES"

// employees = [{
//		"id": "5e00928d91e7feaa9872ec08",
//		"firstName": "Yang",
//		"lastName": "Carson",
//		"dob": "2019-02-26T16:52:36.244Z"
//},, {...}]

let initialState = {
	employees: [],
}

export default function employeesReducer(state = initialState, action) {
	switch (action.type) {
		case GET_ALL_EMPLOYEES:
			return { ...state, employees: action.usersData }

		default:
			return state
	}
}

export const getAllEmployeesAC = usersData => ({ type: GET_ALL_EMPLOYEES, usersData })
