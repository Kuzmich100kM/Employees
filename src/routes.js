import React from "react"
import { Route, Switch } from "react-router-dom"
import Home from "./components/Home"
import Employees from "./components/Employees"

export default function AllRoutes() {
	return (
		<Switch>
			<Route exact path="/" render={() => <Home />} />
			<Route path="/employees" render={() => <Employees />} />
			<Route path="*" render={() => "404 PAGE NOT FOUND"} />
		</Switch>
	)
}
