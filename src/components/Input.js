import { forwardRef } from "react";

const Input = forwardRef(({ type, id, label, name, value, handleChange }, ref) => {

	return (
		<div className="form-data">
			<label htmlFor={id}>{label}</label>
			<input aria-label={"saisir votre " + id} ref={ref} type={type} id={id} name={name} value={value} onChange={handleChange} />
		</div>
	);
})

Input.defaultProps = {
	type: "text",
};

export default Input;
