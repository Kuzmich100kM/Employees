import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import AllRoutes from "./routes"
import Header from "./components/Header"
import history from "./utils/history"

export default function App() {
	return (
		<Router history={history}>
			<Header />
			<AllRoutes />
		</Router>
	)
}
