import React from "react"
import FormPanel from "."
import { isFilled, isInt, isNumber, isNumberMore } from "./inputValidators"

const initV = {
	stratType: "Simply",
	maxActiveOrders: 1,
}
export default function ({ submitCb, cancelCb, valueCb, initValue = initV, isEditForm }) {
	const addClass = isEditForm && "disabled"

	const initModels = [
		{
			name: "stratType",
			type: "select",
			className: addClass,
			options: [
				{ value: "Simply", description: "Simply" },
				{ value: "Drop", description: "Drop" },
				{ value: "Pump", description: "Pump" },
				{ value: "Short", description: "Short" },
				{ value: "Matrix", description: "Matrix" },
			],
		},
		{
			name: "maxActiveOrders",
			label: "Максимум ордеров по стратегии",
			type: "input",
			validators: [
				{ validFun: input => isNumberMore(input, 0) },
				{ validFun: isInt },
				{ validFun: isFilled },
			],
		},
		{
			name: "checker",
			label: "Запомнить",
			type: "checkbox",
			className: "",
			validators: [{ validFun: isFilled }],
		},
		{
			name: "radiooo",
			label: "Выбор за тобой",
			type: "radio",
			options: [
				{ value: "male", name: "Male" },
				{ value: "female", name: "Female" },
			],
			validators: [{ validFun: isFilled }],
		},
		{
			name: "description",
			type: "textarea",
			placeholder: "Description",
			rows: 2,
			validators: [{ validFun: isFilled }],
			parseFun: expression => parseLength(expression, 2000),
		},
	]

	return (
		<div>
			<FormPanel
				initValue={initValue}
				initModels={initModels}
				submitCb={submitCb}
				cancelCb={cancelCb}
				valueCb={valueCb}
				btnCancel={"Вернуться"}
				btnSubmit={"Сохранить"}
				//cls="small"
				// firstTag={
				// 	<button type="cancel" onClick={oneStratCancel} className="cancel">
				// 		{"Охрана, отмена!"}
				// 	</button>
				// }
			/>
		</div>
	)
}
