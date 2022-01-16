export default function InputButton({ onClick, isActive, children, type = "button" }) {
	const baseStyles =
		"active:bg-orange-500 active:text-white hover:bg-orange-400 hover:text-white border-orange-400 border px-2 py-1 rounded-md text-sm";

	const styles = isActive ? `${baseStyles} bg-orange-400 text-white` : `${baseStyles} text-orange-400`;

	return (
		<button type={type} className={styles} onClick={onClick}>
			{children}
		</button>
	);
}
