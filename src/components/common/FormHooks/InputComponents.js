// 2 стиль оформления формы (rightLabel)
// Добавить класс (rightLabel) в ф.(Input)- (<div className= `form-group rightLabel`) >
import React, { useState } from "react"
import { v4 as uuidv4 } from "uuid"

export function Input({ name, label, value, type, alert, inputChange, className, placeholder }) {
	return (
		<div className={className ? `form-group ${className}` : `form-group`}>
			{alert && <div className="error">{alert}</div>}
			<input
				id={name}
				name={name}
				type={type}
				onChange={inputChange}
				defaultValue={value || null}
				placeholder={placeholder || " "}
			/>
			<label htmlFor={name}>{label}</label>
		</div>
	)
}
export function Select({ name, label, value, type, options, inputChange, className }) {
	const [isOpen, setIsOpen] = useState(false)
	//console.log(value)
	return (
		<div className={className ? `form-group ${className}` : `form-group`}>
			<div className={isOpen ? "selecter open" : "selecter"} onClick={() => setIsOpen(!isOpen)}>
				<div className="trigger" name={name}>
					<div>{value}</div>
					<div className="arrow-wrap">
						<div className="arrow"></div>
					</div>
				</div>
				{options && (
					<div className="options">
						{options.map(o => (
							<input
								className={o.value === value ? `option active` : `option`}
								key={o.value}
								type={type}
								name={name}
								defaultValue={o.value}
								onClick={inputChange}
							/>
						))}
					</div>
				)}
				<label htmlFor={name}>{!value && label}</label>
			</div>
		</div>
	)
}

export function Checkbox({ name, label, value, alert, inputChange, className }) {
	return (
		<div className={className ? `form-group ${className}` : `form-group`}>
			{alert && <div className="error">{alert}</div>}
			<input id={name} name={name} type="checkbox" value={value} checked={value || false} onChange={inputChange} />
			<label htmlFor={name}>{label}</label>
		</div>
	)
}

export function Radio({ name, label, value, checked, alert, options, inputChange, className }) {
	return (
		<div className={className ? `form-group ${className}` : `form-group`}>
			{alert && <div className="error">{alert}</div>}
			{options &&
				options.map(o => (
					<div key={o.value} className="radio">
						<input
							id={uuidv4()}
							//id={o.name}
							name={name}
							type="radio"
							value={o.value}
							checked={value === o.value}
							onChange={inputChange}
						/>
						<label htmlFor={o.name}>{o.name}</label>
					</div>
				))}
		</div>
	)
}

export function Textarea({ name, label, value, alert, placeholder, rows, cols, inputChange, className }) {
	return (
		<div className={className ? `form-group ${className}` : `form-group`}>
			{alert && <div className="error">{alert}</div>}
			<textarea
				id={name}
				name={name}
				defaultValue={value}
				type="textarea"
				rows={rows}
				cols={cols}
				placeholder={placeholder}
				onChange={inputChange}></textarea>
			{label && <label htmlFor={name}>{label}</label>}
		</div>
	)
}
export function Divider({ name, label, value, alert, placeholder, rows, cols, inputChange, className }) {
	return <div className={className ? `form-group ${className}` : `form-group`}>{name}</div>
}
// return (
// 		<div className={className ? `form-group ${className}` : `form-group`}>
// 			<div
// 				className={isOpen ? "select open" : "select"}
// 				onClick={() => setIsOpen(!isOpen)}
// 			>
// 				<div className="trigger" name={name} type={type}>
// 					<div>{value}</div>
// 					<div className="arrow"></div>
// 				</div>
// 				{options && (
// 					<div className="options">
// 						{options.map((o) => (
// 							<span
// 								className="option"
// 								key={o.value}
// 								type={type}
// 								name={name}
// 								data-value={o.value}
// 								onClick={sel}
// 							>
// 								{o.description}
// 							</span>
// 						))}
// 					</div>
// 				)}
// 			</div>
// 		</div>
// 	)
// export function Select({
// 	name,
// 	type,
// 	value,
// 	options,
// 	inputChange,
// 	className,
// }) {
// 	return (
// 		<div className={className ? `form-group ${className}` : `form-group`}>
// 			<select name={name} type={type} value={value} onChange={inputChange}>
// 				{options &&
// 					options.map((o) => (
// 						<option key={o.value} value={o.value}>
// 							{o.description}
// 						</option>
// 					))}
// 			</select>
// 		</div>
// 	)
// }
