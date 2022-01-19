import { useEffect, useRef } from "react";

export default function InputCheck({ onChange, checked, name, label, indeterminate }) {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.checked = checked;
    inputRef.current.indeterminate = indeterminate;
  }, [checked, indeterminate]);

  return (
    <div className="flex items-center gap-2 p-1">
      <input className="block w-5 h-5 accent-orange-600" id={name} name={name} type="checkbox" onChange={onChange} ref={inputRef} />
      <label className="font-light text-sm" htmlFor={name}>
        {label}
      </label>
    </div>
  );
}
