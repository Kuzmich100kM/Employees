const GET_ALL_USERS = "GET_ALL_USERS"
const CHANGE_USER_STATUS = "CHANGE_USER_STATUS"

// employees = [{
//		"id": "5e00928d91e7feaa9872ec08",
//		"firstName": "Yang",
//		"lastName": "Carson",
//		"dob": "2019-02-26T16:52:36.244Z",
//		"status": "false"
//},, {...}]

let initialState = {
	users: [],
}

export default function employeesReducer(state = initialState, action) {
	switch (action.type) {
		case GET_ALL_USERS:
			return { ...state, users: action.usersData }

		case CHANGE_USER_STATUS:
			return {
				...state,
				users: [...state.users.map(el => (el.id === action.data.id ? { ...el, status: action.data.status } : el))],
			}

		default:
			return state
	}
}

export const getAllUsersAC = usersData => ({ type: GET_ALL_USERS, usersData })
export const changeUserStatusAC = data => ({ type: CHANGE_USER_STATUS, data })
