const allowedTypes = ["text", "tel", "number", "email", "password"];

export default function InputField({
	name,
	value,
	placeholder,
	type = "text",
	feedbackMessage,
	isInvalid = false,
	onChange = () => {},
	onBlur = () => {},
}) {
	if (!allowedTypes.includes(type)) {
		throw new Error(`Wrong input type for InputField component. Allowed types are ${allowedTypes.join(", ")}.`);
	}

	const inputBaseStyles =
		"p-2 w-full shadow-md rounded-sm font-light placeholder:font-light outline-none border border-gray-200";
	const inputStyles = isInvalid
		? `${inputBaseStyles} border border-red-600`
		: `${inputBaseStyles} border-b-2 border-b-orange-500`;

	const feedbackBaseStyles = "text-sm text-red-600";
	const feedbackStyles = isInvalid ? feedbackBaseStyles : "hidden";

	return (
		<div className="flex flex-col gap-1">
			<input
				className={inputStyles}
				type={type}
				name={name}
				value={value}
				placeholder={placeholder}
				onChange={onChange}
				onBlur={onBlur}
			/>
			<div className={feedbackStyles}>{feedbackMessage}</div>
		</div>
	);
}
