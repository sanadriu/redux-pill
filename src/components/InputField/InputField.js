const allowedTypes = ["text", "tel", "number", "email", "password"];

export default function InputField({
	name,
	value,
	placeholder,
	type = "text",
	feedbackMessage,
	isInvalid = false,
	className,
	onChange = () => {},
	onBlur = () => {},
}) {
	if (!allowedTypes.includes(type)) {
		throw new Error(`Wrong input type for InputField component. Allowed types are ${allowedTypes.join(", ")}.`);
	}

	const inputBaseStyles = "p-2 shadow-md font-light placeholder:font-light w-full";
	const inputStyles = isInvalid
		? `${inputBaseStyles} border border-red-600`
		: `${inputBaseStyles} border-b-2 border-b-orange-600`;

	const feedbackBaseStyles = "text-sm text-red-600";
	const feedbackStyles = isInvalid ? feedbackBaseStyles : "hidden";

	return (
		<div className={className}>
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
