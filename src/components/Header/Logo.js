import React from "react"
import { NavLink } from "react-router-dom"

export default function Logo() {
	return (
		<div className="logo">
			<NavLink to="/">
				<div id="logo">Logo</div>
			</NavLink>
		</div>
	)
}
