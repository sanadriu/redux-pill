export default function InputButton({ onClick, isActive, children, type = "button" }) {
	const baseStyles =
		"active:bg-orange-600 active:text-white hover:bg-orange-500 hover:text-white border-orange-500 border px-2 py-1 rounded-md text-sm";

	const styles = isActive ? `${baseStyles} bg-orange-500 text-white` : `${baseStyles} text-orange-500`;

	return (
		<button type={type} className={styles} onClick={onClick}>
			{children}
		</button>
	);
}
