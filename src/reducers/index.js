import { combineReducers } from "redux"
import homeReducer from "./home.reducer"
import employeesReducer from "./employees.reducer"

export default combineReducers({
	homePage: homeReducer,
	employeesPage: employeesReducer,
})
