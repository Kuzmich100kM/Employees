import React from "react"
import { HashRouter as Router } from "react-router-dom"
import AllRoutes from "./routes"
import Header from "./components/Header"
import history from "./utils/history"

export default function App() {
	return (
		<Router history={history} basename={process.env.PUBLIC_URL}>
			<Header />
			<AllRoutes />
		</Router>
	)
}
