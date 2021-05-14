import React from "react"
import useFormHooks from "./useFormHooks"
import { Input, Radio, Textarea, Checkbox, Select, Divider } from "./InputComponents"

export default function FormPanel({
	initModels,
	initValue,
	submitCb,
	cancelCb,
	valueCb,
	btnSubmit,
	btnCancel,
	firstTag,
	secondTag,
	cls,
}) {
	const [models, inputs, inputChange, handleSubmit] = useFormHooks(initModels, initValue, submitCb, valueCb)

	const Components = { Input, Select, Textarea, Radio, Checkbox, Divider }
	const capitalize = modelType => modelType.charAt(0).toUpperCase() + modelType.slice(1)

	return (
		<form autoComplete="off" onKeyPress={e => e.key === "Enter" && handleSubmit(e)} className={cls}>
			{models.map(m => {
				let type = m.type
				if (m.type === "password") type = "input"
				const Component = Components[capitalize(type)]
				return <Component key={m.name} inputChange={inputChange} value={inputs[m.name]} {...m} />
			})}
			{firstTag}
			{secondTag}
			{btnCancel && (
				<button type="cancel" onClick={cancelCb}>
					{btnCancel}
				</button>
			)}
			{btnSubmit && (
				<button type="submit" onClick={handleSubmit} className="btn-submit">
					{btnSubmit}
				</button>
			)}
		</form>
	)
}
