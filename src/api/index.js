import axios from "axios"
const baseAxios = axios.create({ baseURL: "http://localhost:7001/api/" })

export const userAPI = {
	getAllEmployees: () => baseAxios.get(`task0/users`),
}
