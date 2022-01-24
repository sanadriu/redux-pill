const allowedSizes = ["sm", "md", "lg"];

export default function InputButton({
	children,
	type = "button",
	isChecked,
	isDisabled,
	full,
	size = "sm",
	onClick = () => {},
}) {
	if (!allowedSizes.includes(size)) {
		throw new Error(`Wrong size for component. Allowed sizes are ${allowedSizes.join(", ")}.`);
	}

	const baseStyles = "border rounded-md shadow-sm";
	const sizeStyles = {
		sm: "px-2 py-1 text-sm",
		md: "px-3 py-1",
		lg: "px-4 py-1 text-lg",
	};

	const isCheckedStyles = `
		bg-orange-500
		text-white
	`;
	const isUncheckedStyles = `
		text-orange-500
	`;

	const isDisabledStyles = `
		bg-gray-400
		text-white
	`;

	const isEnabledStyles = `
		active:bg-orange-600
		active:text-white
		hover:bg-orange-600
		hover:text-white
		border-orange-600
		${isChecked ? isCheckedStyles : isUncheckedStyles}
	`;

	const styles = `
		${baseStyles}
		${isDisabled ? isDisabledStyles : isEnabledStyles} 
		${full ? "w-full" : "w-auto"}
		${sizeStyles[size]}
	`;

	return (
		<button
			type={type}
			className={styles}
			disabled={isDisabled}
			onClick={() => {
				if (type === "button") onClick();
			}}
		>
			{children}
		</button>
	);
}
