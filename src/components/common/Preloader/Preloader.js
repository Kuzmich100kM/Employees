import React from "react"
import preloader from "../../../assets/img/loader.svg"

export const Preloader = () => {
	return (
		<div className="preloaderWrap">
			<img src={preloader} alt="preloader" />
		</div>
	)
}
