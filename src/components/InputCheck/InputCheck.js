export default function inputCheck({ onChange = () => {}, checked, name, label }) {
	return (
		<div className="flex items-center gap-2 p-1">
			<input
				className="block w-5 h-5 accent-orange-600"
				id={name}
				name={name}
				type="checkbox"
				onChange={onChange}
				checked={checked}
			/>
			<label className="font-light text-sm" htmlFor={name}>
				{label}
			</label>
		</div>
	);
}
