import React from "react"
import { NavLink } from "react-router-dom"

export default function Navbar() {
	let pages = [
		{ url: "employees", name: "Employees" },
		{ url: "page1", name: "Page 1" },
		{ url: "page2", name: "Page 2" },
	]

	const Navs = () => (
		<>
			{pages.map(el => (
				<NavLink to={`/${el.url}`} key={el.url}>
					{el.name}
				</NavLink>
			))}
		</>
	)

	return <Navs />
}
