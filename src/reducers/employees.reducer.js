//import { userAPI } from "../api"

const GET_ALL_USERS = "GET_ALL_USERS"

// employees = [{
//		"id": "5e00928d91e7feaa9872ec08",
//		"firstName": "Yang",
//		"lastName": "Carson",
//		"dob": "2019-02-26T16:52:36.244Z"
//},, {...}]

let initialState = {
	users: [],
}

export default function employeesReducer(state = initialState, action) {
	switch (action.type) {
		case GET_ALL_USERS:
			return { ...state, users: action.usersData }

		default:
			return state
	}
}

export const getAllUsersAC = usersData => ({ type: GET_ALL_USERS, usersData })
