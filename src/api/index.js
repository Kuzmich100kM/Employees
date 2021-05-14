import axios from "axios"
const baseAxios = axios.create({ baseURL: "https://yalantis-react-school-api.yalantis.com/api/" })

export const userAPI = {
	getAllUsers: () => baseAxios.get(`task0/users`),
}
